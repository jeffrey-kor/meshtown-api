import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  constructor(private readonly reflector: Reflector) {
    super();
  }
  /*
  * canActivate
  *  해당 가드는 라우터에 대해서 접근이 가능한지 불가능 한지 접근 권한을 체크 하는 기능을 한다.
  *  해당 가드를 사용 하고자 한다면 구현하고자 하는 가드 클래스에 CanActivate 인터페이스 모듈을 구현 해야하며
  *  해당 인터페이스에는 메소드가 있으며 해당 메소드 안에서 라우터 접근 로직을 구현 하거나 구현된 서비스를 사용 하면 된다.
  *  반환값이 true이면 요청이 처리, 반환값이 false이면 Nest는 요청을 거부
  * */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get<boolean>("isPublic", context.getHandler);
    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

}
