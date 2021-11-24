import { CanActivate, ExecutionContext, ForbiddenException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

export class RoleGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const requireRoles = this.reflector.getAllAndOverride<string[]>("role", [
      context.getHandler(),
      context.getClass()
    ]);

    const request = context
      .switchToHttp()
      .getRequest();

    const token = jwt_decode(request.headers.authorization);

    if (requireRoles === token["type"]) {
      return true;
    } else {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: ["FORBIDDEN"],
        error: "Forbidden"
      });
    }
  }
}