import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOAuth2, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { KaKaoAuthGuard } from '../../guards/kakao-auth.guard';
import { ResponseEntity } from '../../../../common/payloads/responseEntity';
import { FacebookAuthGuard } from '../../guards/facebook-auth.guard';
import { AuthService } from '../../application/service/auth.service';
import { GoogleAuthGuard } from '../../guards/google-auth.guard';
import { NaverAuthGuard } from '../../guards/naver-auth.guard';

@ApiOAuth2([""])
@Controller("oauth")
export class Oauth2Controller {

  constructor(private authService: AuthService) {}

  @UseGuards(KaKaoAuthGuard)
  @HttpCode(201)
  @ApiOperation({ summary: "카카오로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Kakao login", type: ResponseEntity })
  @Post("/login/kakao")
  async loginWithKakao(@Req() req) {
    return this.authService.loginWithKakao(req);
  }

  @UseGuards(FacebookAuthGuard)
  @HttpCode(201)
  @ApiOperation({ summary: "페이스북으로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Facebook login", type: ResponseEntity })
  @Post("/login/facebook")
  async loginWithFacebook(@Req() req) {
    return this.authService.loginWithFacebook(req);
  }

  @UseGuards(GoogleAuthGuard)
  @HttpCode(201)
  @ApiOperation({ summary: "구글로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Google Login", type: ResponseEntity })
  @Post("/login/google")
  async loginWithGoogle(@Req() req) {
    return this.authService.loginWithGoogle(req);
  }

  @UseGuards(NaverAuthGuard)
  @HttpCode(201)
  @ApiOperation({ summary: "네이버로 로그인하기" })
  @ApiOkResponse({ description: "OAuth2 Naver Login", type: ResponseEntity })
  @Post("/login/naver")
  async loginWithNaver(@Req() req) {
    return this.authService.loginWithNaver(req);
  }


}