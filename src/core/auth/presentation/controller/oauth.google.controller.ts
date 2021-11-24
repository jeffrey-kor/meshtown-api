import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../../guards/google-auth.guard';
import { AuthGoogleService } from '../../application/service/auth.google.service';

@Controller("google")
export class OauthGoogleController {

  constructor(private readonly authService: AuthGoogleService) {}

  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req) {
    return this.authService.loginWithGoogle(req);
  }
}