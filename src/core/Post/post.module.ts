import { Module } from '@nestjs/common';
import { PostController } from './presentation/Controller/post.controller';
import { PostService } from './application/post.service';
import { PostCudRepository } from './infrastructure/post.cud.repository';
import { PostReadRepository } from './infrastructure/post.read.repository';
import { UserModules } from '../users/user.modules';

@Module({
  imports: [UserModules],
  controllers: [PostController],
  providers: [PostService, PostCudRepository, PostReadRepository],
  exports: []
})
export class PostModule {}