import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { HttpReqUserRegisterDTO } from '../dto/http.req.user-register.dto';
import { UserService } from '../../application/service/user.service';
import { ResponseEntity } from '../../../../system/payloads/responseEntity';
import { User } from '../../domain/User';

@Controller("user")
@ApiTags("User Apis")
export class UsersController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @HttpCode(200)
  @ApiOperation({ summary: "Test Api" })
  @ApiOkResponse({ description: "Test Api", type: ResponseEntity })
  @Get("/testing")
  async test(): Promise<string> {
    return "Hello, world!";
  }

  @Post("/register")
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async register(@Body() req: HttpReqUserRegisterDTO): Promise<ResponseEntity<string>> {
    try {
      await this.userService.register(req.toEntity());
      return ResponseEntity.OK();
    } catch(e) {
      return ResponseEntity.ERROR_WITH("Failed to signup.");
    }
  }

  @Delete("/delete/:id")
  @HttpCode(201)
  @ApiOperation({ summary: "Dropdown a member's membership api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async dropdown(@Param("id") req: number): Promise<void> {
    await this.userService.delete(req);
  }

  @Get("/find/list-all")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async findOne(@Param("id") req: number): Promise<User> {
    return this.userService.findOne(req);
  }

}
