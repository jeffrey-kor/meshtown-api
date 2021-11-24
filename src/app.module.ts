import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './core/users/domain/User';
import { LoggerMiddleware } from './common/logger/LoggerMiddleware';
import { UsersController } from './core/users/presentation/controller/users.controller';
import { UserModules } from './core/users/user.modules';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './core/auth/auth.module';
import { AuthController } from './core/auth/presentation/controller/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './core/auth/guards/jwt-auth.guard';
import { Profile } from './core/users/domain/Profile';


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

