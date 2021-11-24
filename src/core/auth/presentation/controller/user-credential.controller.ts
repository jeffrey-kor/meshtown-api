import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ResponseEntity } from '../../../../common/payloads/responseEntity';
import { HttpUserFindUserIdDto } from '../dto/http.user.find-userId.dto';
import { UserCredentialService } from '../../application/service/user-credential.service';
import { HttpUserFindPasswordDto } from '../dto/http.user.find-password.dto';

@Controller()
export class UserCredentialController {

  constructor(private userCredentialService: UserCredentialService) {}

  @HttpCode(201)
  @ApiOperation({ summary: "유저 아이디 찾기" })
  @ApiOkResponse({ description: "find user credential", type: ResponseEntity })
  @Post("/find/credential")
  async forgotUserCredential(@Body() userCredentialDto: HttpUserFindUserIdDto) {
    // 1. 이름확인
    // 2. 휴대폰번호 입력시 해당 휴대폰번호로 인증 문자 발송
    // 3. 인증 번호 유효성 검사
    // 4. 해당 아이디 조회
  }

  @HttpCode(201)
  @ApiOperation({ summary: "비밀번호 찾기" })
  @ApiOkResponse({ description: "When forget user's password, returns request initiate password through email", type: ResponseEntity })
  @Post("/reset/password")
  async forgotPassword(@Body() userCredentialDto: HttpUserFindPasswordDto) {
    return await this.userCredentialService.reconfigurePassword(userCredentialDto);
    // 1. 비밀번호 초기화 요청
    // 2. 인증키를 발급
    // 3. 인증키 이메일 발송
    // 4. 이메일 확인
    // 5. 새로운 비밀번호 입력
    // 6. 인증키 확인
    // 7. 비밀번호 초기화
    // 8. 초기화 완료
  }


}
