import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
  constructor() { super(); }

  async validate(username: string, password: string): Promise<any> {
    return true;
  }
}