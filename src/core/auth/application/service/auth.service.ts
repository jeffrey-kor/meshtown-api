import { HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/core/users/application/service/user.service';
import { JwtService } from "@nestjs/jwt";
import { HttpRUserRepository } from '../../../users/infrastructure/repository/http.r.user.repository';
import { HttpUserLocalLoginDto } from '../../presentation/dto/http.user.local-login.dto';
import * as bcrypt from "bcrypt";
import { jwtConstants } from '../../constants/jwtConstant';

@Injectable()
export class AuthService {

  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(HttpRUserRepository) private httpReadUserRepository: HttpRUserRepository,
    private jwtService: JwtService
  ) {}

  async validateUser(dto: HttpUserLocalLoginDto): Promise<any> {

    const user = await this.httpReadUserRepository
      .findOneByEmail(dto.email);

    console.log("user>>>>", user);
    console.log("user_password", user.user_password);

    if (!user) {
     throw new UnauthorizedException({
       statusCode: HttpStatus.UNAUTHORIZED,
       message: ["USER_INFORMATION_DOES_NOT_FOUND"],
       error: "Unauthorized"
     })
    }

    const matched = await bcrypt
      .compare(dto.password, user.user_password);

    if (matched) {
      const { user_password, ...result } = user;
      return result;
    } else {
      throw new UnauthorizedException({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: ["USER_INFORMATION_DOES_NOT_MATCH"],
        error: "Unauthorized"
      })
    }
  }

  async login(data: any) {
    const payload = { email: data.email, type: data.type };
    console.log("payload >>>>>>>>> ", payload);
    return {
      email: data.email,
      accessToken: this.jwtService.sign(payload)
    }
  }

  async logout(req) {
    // TODO:
  }

  async createToken(): Promise<any> {
    // const email = dto.email;
    const emails = { email: "wjdrlrkdl3@gmail.com" };
    const accessToken = this.jwtService.sign(emails);
    console.log(accessToken);

    return {
      expireIn: 3600,
      accessToken
    }
  }

  async createRefreshToken(email: string): Promise<any> {
    const token = this.jwtService.sign(email, {
      secret: jwtConstants.secret,
      expiresIn: "3600s"
    });

    return {
      expireIn: "3600s",
      refreshToken: token
    }
  }

  async checkTokenValidation(token) {
    // return this.jwtService.verify()
  }

  async checkTokenExpiration(token: string): Promise<Object> {
    // TODO:
    // 현재 토큰의 남아있는 시간과 분 - 현재 시간과 분을 계산해
    // 현재 토큰의 남아 있는 시간과 분을 포맷화해서 돌려준다.

    return new Object();
  }

  async destroyToken(req) {
    // TODO
  }


  /*
      SOC 2 준수
      TrustE 인증
      건강 보험 양도 및 책임에 관한 법률(HIPAA), 개인정보 보호 및 전자 문서법(PIPEDA), 개인 건강 정보 보호법(PHIPA) 준수
      업계 표준 인증 프로토콜을 통한 싱글 사인온
      이중 인증 지원
      전송 중 데이터와 미사용 데이터 암호화
      데스크탑 및 모바일 기기의 엔드투엔드 암호화
      최대 10년 보관 및 Smarsh, Global Relay와의 통합
      직책, 부서, 내선 번호 등으로 향상된 프로필 연락처 카드
  * */
}