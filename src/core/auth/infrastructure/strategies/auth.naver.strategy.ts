import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-naver';

@Injectable()
export class NaverOAuthStrategy extends PassportStrategy(Strategy) {

  constructor() { super(); }

  async validate(username: string, password: string): Promise<any> {
    return true;
  }
}