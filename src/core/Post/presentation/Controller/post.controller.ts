import { Body, Controller, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HttpPostWriteDto } from '../dto/http.post.write.dto';
import { HttpPostUpdateDto } from '../dto/http.post.update.dto';
import { PostService } from '../../application/post.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ResponseEntity } from '../../../../common/payloads/responseEntity';

@Controller("post")
export class PostController {

  constructor(private postService: PostService) {}

  @Post("/write")
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async writePost(@Body() dto: HttpPostWriteDto) {
    return this.postService.write(dto.toEntity());
  }

  @Post("/find/:id")
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async deletePost(@Param("id") id: number) {
    return this.postService.delete(id);
  }

  @Post("/update")
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: "Register a member api"})
  @ApiOkResponse({ description: "OK(201)", type: ResponseEntity })
  async updatePost(@Body() dto: HttpPostUpdateDto) {
    return this.postService.update(dto);
  }

}