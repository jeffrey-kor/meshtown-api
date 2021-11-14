import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './core/users/domain/User';
import { LoggerMiddleware } from './common/logger/LoggerMiddleware';
import { UsersController } from './core/users/presentation/controller/users.controller';
import { UserModules } from './core/users/user.modules';
import { ThrottlerModule } from '@nestjs/throttler';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Dlsgud*132',
      database: 'meshtown_api',
      entities: [User],
      synchronize: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    UserModules,
  ],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        UsersController,
      )
  }
}
