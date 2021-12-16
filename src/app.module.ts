import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModules } from './core/users/user.modules';
import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { LoggerMiddleware } from './common/logger/LoggerMiddleware';
import { UsersController } from './core/users/presentation/controller/users.controller';
import { AuthController } from './core/auth/presentation/controller/auth.controller';
import { Profile } from './core/users/domain/Profile';
import { User } from './core/users/domain/User';

const providers = [];
const controllers = [];
const modules = [];


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Dlsgud*132',
      database: 'meshtown_api',
      entities: [User, Profile],
      synchronize: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    UserModules,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule
  ],
  providers: [
  //   {
  //   provide: APP_GUARD,
  //   useClass: JwtAuthGuard,
  // }
  ],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        UsersController,
        AuthController
      )
  }
}

