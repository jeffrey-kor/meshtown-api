import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/test')
  async test(): Promise<string> {
    return '미라님 시작합시다. 1월달까지 달려봐요.';
  }
}
