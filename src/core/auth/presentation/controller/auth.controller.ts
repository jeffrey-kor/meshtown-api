import { Controller, Post, HttpCode, Inject, Req, UseGuards, Get, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ResponseEntity } from 'src/common/payloads/responseEntity';
import { AuthService } from '../../application/service/auth.service';
import { LocalAuthGuard } from '../../guards/local-auth.guard';
import { authPublic } from '../../decorators/authPublic.decorator';
import { HttpUserFindUserIdDto } from '../dto/http.user.find-userId.dto';

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
  @ApiOperation({ summary: "로그아웃 하기" })
  @ApiOkResponse({ description: "Local Logout", type: ResponseEntity })
  @Post("/logout")
  async logout(@Req() req) {
    return this.authService.logout(req);
  }

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
  @ApiOperation({ summary: "토큰 삭제" })
  @ApiOkResponse({ description: "remove Token", type: ResponseEntity })
  @Get("token/validate")
  async destroyToken(@Req() req) {
    return this.authService.destroyToken(req);
  }



}