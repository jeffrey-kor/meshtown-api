import { PartialType } from "@nestjs/mapped-types";
import { HttpReqUserRegisterDTO } from './http.req.user-register.dto';

export class HttpResUserRegisterDTO extends PartialType(HttpReqUserRegisterDTO) {}
