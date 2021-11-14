import { Module } from '@nestjs/common';
import { GoogleOAuthStrategy } from './strategies/auth.google.strategy';
import { FacebookOAuthStrategy } from './strategies/auth.facebook.strategy';
import { LocalStrategy } from './strategies/auth.local.strategy';
import { KaKaoOAuthStrategy } from './strategies/auth.kakao.strategy';
import { NaverOAuthStrategy } from './strategies/auth.naver.strategy';
import { AuthController } from './presentation/controller/auth.controller';
import { AuthService } from './application/service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModules } from '../users/user.modules';

import { JwtConstant } from './constants/jwtConstant';
import { NaverAuthGuard } from './guards/naver-auth.guard';
import { KaKaoAuthGuard } from './guards/kakao-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtStrategy } from './strategies/JwtStrategy';

@Module({
  imports: [
    UserModules,
    PassportModule,
    JwtModule.register({
      secret: JwtConstant.secret,
      signOptions: { expiresIn: "60s" }
    }),
  ],
  providers: [
    /* Services */
    AuthService,

    /* Strategies */
    GoogleOAuthStrategy,
    FacebookOAuthStrategy,
    LocalStrategy,
    KaKaoOAuthStrategy,
    NaverOAuthStrategy,
    JwtStrategy,

    /* Guards */
    NaverAuthGuard,
    KaKaoAuthGuard,
    GoogleAuthGuard,
    FacebookAuthGuard,
    LocalAuthGuard
  ],
  controllers: [AuthController]
})
export class AuthModule {}