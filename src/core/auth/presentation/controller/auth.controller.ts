import { Controller, Post, HttpCode, Inject, Req, UseGuards, Get, Body, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ResponseEntity } from 'src/common/payloads/responseEntity';
import { AuthService } from '../../application/service/auth.service';
// import { KaKaoAuthGuard } from '../../guards/kakao-auth.guard';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { HttpUserLocalLoginDto } from '../dto/http.user.local-login.dto';
import { authPublic } from '../../decorators/authPublic.decorator';
// import { FacebookAuthGuard } from '../../guards/facebook-auth.guard';
// import { GoogleAuthGuard } from '../../guards/google-auth.guard';
// import { NaverAuthGuard } from '../../guards/naver-auth.guard';

@Controller("auth")
export class AuthController {

  constructor(@Inject(AuthService) private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @authPublic()
  @HttpCode(200)
  @ApiOperation({ summary: "로그인하기" })
  @ApiOkResponse({ description: "Local Login", type: ResponseEntity })
  @Post("/login")
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @HttpCode(201)
  @ApiOperation({ summary: "로그아웃하기" })
  @ApiOkResponse({ description: "Local Logout", type: ResponseEntity })
  @Post("/logout")
  async logout(@Req() req) {
    return this.authService.logout(req);
  }

  // @UseGuards(KaKaoAuthGuard)
  // @HttpCode(201)
  // @ApiOperation({ summary: "카카오로 로그인하기" })
  // @ApiOkResponse({ description: "OAuth2 Kakao login", type: ResponseEntity })
  // @Post("/login/kakao")
  // async loginWithKakao(@Req() req) {
  //   return this.authService.loginWithKakao(req);
  // }
  //
  // @UseGuards(FacebookAuthGuard)
  // @HttpCode(201)
  // @ApiOperation({ summary: "페이스북으로 로그인하기" })
  // @ApiOkResponse({ description: "OAuth2 Facebook login", type: ResponseEntity })
  // @Post("/login/facebook")
  // async loginWithFacebook(@Req() req) {
  //   return this.authService.loginWithFacebook(req);
  // }
  //
  // @UseGuards(GoogleAuthGuard)
  // @HttpCode(201)
  // @ApiOperation({ summary: "구글로 로그인하기" })
  // @ApiOkResponse({ description: "OAuth2 Google Login", type: ResponseEntity })
  // @Post("/login/google")
  // async loginWithGoogle(@Req() req) {
  //   return this.authService.loginWithGoogle(req);
  // }
  //
  // @UseGuards(NaverAuthGuard)
  // @HttpCode(201)
  // @ApiOperation({ summary: "네이버로 로그인하기" })
  // @ApiOkResponse({ description: "OAuth2 Naver Login", type: ResponseEntity })
  // @Post("/login/naver")
  // async loginWithNaver(@Req() req) {
  //   return this.authService.loginWithNaver(req);
  // }

  @HttpCode(200)
  // @authPublic()
  @ApiOperation({ summary: "토큰 생성하기" })
  @ApiOkResponse({ description: "Create Token for authorization", type: ResponseEntity })
  @Get("/token")
  async createToken(): Promise<any> {
    return this.authService.createToken(); // @Req() dto: HttpUserLocalLoginDto
  }

  @HttpCode(200)
  @ApiOperation({ summary: "리프레쉬 토큰 생성하기" })
  @ApiOkResponse({ description: "Create refresh Token for authorization", type: ResponseEntity })
  @Get("token/refresh")
  async createRefreshToken(@Req() req) {
    return this.authService.createRefreshToken(req);
  }

  @HttpCode(200)
  @ApiOperation({ summary: "토큰 유효성 검사" })
  @ApiOkResponse({ description: "Check Token validation", type: ResponseEntity })
  @Get("token/validate")
  async validate(@Req() req) {
    return this.authService.checkTokenValidation(req);
  }

  @HttpCode(200)
  @ApiOperation({ summary: "토큰 만료시간 검사" })
  @ApiOkResponse({ description: "Check Token expiration", type: ResponseEntity })
  @Get("token/validate")
  async checkTokenExpiration(@Req() req) {
    return this.authService.checkTokenExpiration(req);
  }

  @HttpCode(200)
  @ApiOperation({ summary: "토큰 만료시간 검사" })
  @ApiOkResponse({ description: "Check Token expiration", type: ResponseEntity })
  @Get("token/validate")
  async destroyToken(@Req() req) {
    return this.authService.destroyToken(req);
  }



}