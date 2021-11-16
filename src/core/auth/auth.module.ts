import { Module } from '@nestjs/common';

import { AuthController } from './presentation/controller/auth.controller';
import { AuthService } from './application/service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModules } from '../users/user.modules';

import { NaverAuthGuard } from './guards/naver-auth.guard';
import { KaKaoAuthGuard } from './guards/kakao-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
// import { GoogleOAuthStrategy } from './infrastructure/strategies/auth.google.strategy';
// import { FacebookOAuthStrategy } from './infrastructure/strategies/auth.facebook.strategy';
import { LocalStrategy } from './infrastructure/strategies/auth.local.strategy';
// import { KaKaoOAuthStrategy } from './infrastructure/strategies/auth.kakao.strategy';
// import { NaverOAuthStrategy } from './infrastructure/strategies/auth.naver.strategy';
import { JwtStrategy } from './infrastructure/strategies/JwtStrategy';
import { jwtConstants } from './constants/jwtConstant';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

// https://velog.io/@sz3728/NestJS-JWT-%EB%B0%9C%ED%96%89-%EB%B0%8F-%EB%A7%8C%EB%A3%8C%EC%B2%98%EB%A6%AC-%EA%B8%B0%EB%8A%A5-%EA%B6%8C%ED%95%9C-%EC%A0%9C%ED%95%9C#-authservice-%EC%9E%91%EC%84%B1

@Module({
  imports: [
    UserModules,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" }
    }),
  ],
  providers: [
    /* Services */
    AuthService,

    /* Strategies */
    // GoogleOAuthStrategy,
    // FacebookOAuthStrategy,
    LocalStrategy,
    // KaKaoOAuthStrategy,
    // NaverOAuthStrategy,
    JwtStrategy,

    /* Guards */
    // NaverAuthGuard,
    // KaKaoAuthGuard,
    // GoogleAuthGuard,
    // FacebookAuthGuard,
    LocalAuthGuard,
    JwtAuthGuard
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}