import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from '../../users/application/service/user.service';
import { User } from 'src/core/users/domain/User';
import { Encryption } from 'src/common/security/encryption/Encryption';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(Encryption) private encryption: Encryption
  ) { super(); }

  /* 이 클래스의 책임이 아닌데 여기 있음. */
  async getUser(req: number): Promise<User | undefined> {
    return await this.userService.findOne(req);
  }

  async validate(username, password): Promise<any> {

  }

}