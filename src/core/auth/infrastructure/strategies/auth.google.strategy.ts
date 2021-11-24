import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { UserService } from '../../../users/application/service/user.service';
require("dotenv").config();

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      clientID: process.env.GOOGLE_OAUTH2_CLIENTID,
      clientSecret: process.env.GOOGLE_OAUTH2_SECRET,
      callbackURL: "http://localhost:3000/google/redirect",
      scope: ["email", "profile"]
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }
    done(null, user);
  }


}