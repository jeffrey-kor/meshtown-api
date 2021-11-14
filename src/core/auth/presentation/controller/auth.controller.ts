import { Controller, Post, HttpCode, Inject, Req, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ResponseEntity } from 'src/common/payloads/responseEntity';
import { AuthService } from '../../application/service/auth.service';
import { KaKaoAuthGuard } from '../../guards/kakao-auth.guard';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { FacebookAuthGuard } from '../../guards/facebook-auth.guard';
import { GoogleAuthGuard } from '../../guards/google-auth.guard';
import { NaverAuthGuard } from '../../guards/naver-auth.guard';

@Controller()
export class AuthController {

  constructor(@Inject(AuthService) private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: "로그인하기" })
  @ApiOkResponse({ description: "Local Login", type: ResponseEntity })
  @Post("/login")
  async login(@Req() req) {
    return this.authService.login(req);
  }

  @HttpCode(200)
  @ApiOperation({ summary: "로그아웃하기" })
  @ApiOkResponse({ description: "Local Logout", type: ResponseEntity })
  @Post("/logout")
  async logout(@Req() req) {
    return this.authService.logout(req);
  }

  @UseGuards(KaKaoAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: "카카오로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Kakao login", type: ResponseEntity })
  @Post("/login/kakao")
  async loginWithKakao(@Req() req) {
    return this.authService.loginWithKakao(req);
  }

  @UseGuards(FacebookAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: "페이스북으로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Facebook login", type: ResponseEntity })
  @Post("/login/facebook")
  async loginWithFacebook(@Req() req) {
    return this.authService.loginWithFacebook(req);
  }

  @UseGuards(GoogleAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: "구글로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Google Login", type: ResponseEntity })
  @Post("/login/google")
  async loginWithGoogle(@Req() req) {
    return this.authService.loginWithGoogle(req);
  }

  @UseGuards(NaverAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: "네이버로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Naver Login", type: ResponseEntity })
  @Post("/login/naver")
  async loginWithNaver(@Req() req) {
    return this.authService.loginWithNaver(req);
  }


}