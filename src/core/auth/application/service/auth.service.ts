import { HttpCode, Injectable, Post } from '@nestjs/common';

@Injectable()
export class AuthService {

  async login(req) {}

  async logout(req) {}

  async loginWithKakao(req) {}

  async loginWithFacebook(req) {}

  async loginWithGoogle(req) {}

  async loginWithNaver(req) {}

}