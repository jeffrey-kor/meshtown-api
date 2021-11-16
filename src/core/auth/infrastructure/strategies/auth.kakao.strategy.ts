import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

@Injectable()
export class KaKaoOAuthStrategy extends PassportStrategy(Strategy) {
  constructor() { super(); }

  async validate(username: string, password: string): Promise<any> {
    return true;
  }
}