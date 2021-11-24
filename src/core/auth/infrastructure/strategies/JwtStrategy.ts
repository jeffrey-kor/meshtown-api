import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../../application/service/auth.service';
import { jwtConstants } from '../../constants/jwtConstant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(data: any): Promise<any> {
    return { email: data.email, type: data.type };
  }

}