import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseEntity } from '../../../../common/payloads/responseEntity';


@Controller("profile")
@ApiTags("Profile Apis")
export class ProfileController {

  constructor() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async registerProfile() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async updateUserName() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async updatePassword() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async updateUserAddress() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async uploadProfilePhoto() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async updateProfilePhoto() {}

  @Get("/find/:id")
  @HttpCode(200)
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async deleteProfilePhoto() {}


}