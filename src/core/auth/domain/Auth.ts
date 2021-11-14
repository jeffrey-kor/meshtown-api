import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth {


  async login() {}
  async logout() {}
  async loginWithKakao() {}
  async loginWithFacebook() {}
  async loginWithGoogle() {}
  async loginWithNaver() {}
}