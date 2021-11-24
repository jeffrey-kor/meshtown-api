import { HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from '../../../users/application/service/user.service';
import { AuthService } from '../../application/service/auth.service';
import { ModuleRef } from '@nestjs/core';
import { HttpUserLocalLoginDto } from '../../presentation/dto/http.user.local-login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private authService: AuthService) {
    super({ usernameField: "email" });
  }

  async validate(email: string, password: string): Promise<any> {
    const loginUserDto: HttpUserLocalLoginDto = { email, password };
    const userInfo = await this.authService.validateUser(loginUserDto);
    if (!userInfo) {
      throw new UnauthorizedException({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: ["USER_INFORMATION_DOES_NOT_MATCH"],
        error: "Unauthorized"
      })
    }

    return userInfo;
  }
}