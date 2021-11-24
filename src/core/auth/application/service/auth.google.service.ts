import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthGoogleService {

  async loginWithGoogle(req) {
    console.log(req);

    if (!req.user) {
      return "No user from google"
    }
    // 이 넘어온 값을 어떻게 처리할지 생각해보자
    // Access token 발급이 되었으니, 유저의 profile 정보와
    // session 유지를 위해 jwt 토큰과 refreshToken을 발급해서 주고,
    // 유저의 정보를 회원 디비에 넣어야하는데, 이걸 하기 위해서는 login auth domain을 분리해야한다.
    //
    return {
      message: "User information from google",
      user: req.user
    }
  }

  async logoutWithGoogle(req) {
    // https://stackoverflow.com/questions/31641884/does-passports-logout-function-remove-the-cookie-if-not-how-does-it-work
    // 로그아웃의 기준을 JWT token 의 여부로 판단을 해야한다.
    // 적절한 token 만료일자, 그리고 refreshToken 일자를 주어서 클라이언트에서 토큰의 유무를 판단하여 회원의 로그아웃 여부를 판별해야한다.
    // 이때 만료일자가 지나지 않은 토큰은 그대로 유효하므로 토큰을 파괴할 수 있는 방법을 찾아야한다.
    // https://stackoverflow.com/questions/37959945/how-to-destroy-jwt-tokens-on-logout
    // 만료 시간전에 서버측에서 토큰을 무효화해야 하는 경우(계정 삭제/차단/일시 중지/비밀번호 변경, 권한 변경, 관리자가 로그아웃 시킨 사용자) 등을 위해 JSON 웹토큰 무효화에 대해 공부해야 한다.
    // https://stackoverflow.com/questions/21978658/invalidating-json-web-tokens
    // memcacheed 또는 redis 에 넣어 사용
    // 또는 블랙리스트 토큰 목록을 만들어 유저의 토큰이 블랙리스트임을 증명하고,
  }


}