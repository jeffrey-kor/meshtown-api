import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { HttpPostUpdateDto } from '../presentation/dto/http.post.update.dto';
import { UserService } from '../../users/application/service/user.service';
import { PostCudRepository } from '../infrastructure/post.cud.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../domain/Post';
import { PostReadRepository } from '../infrastructure/post.read.repository';
import { Builder } from 'builder-pattern';

@Injectable()
export class PostService {

  constructor(
    private userService: UserService,
    @InjectRepository(PostCudRepository) private postCudRepository: PostCudRepository,
    @InjectRepository(PostReadRepository) private postReadRepository: PostReadRepository
  ) {}

  async write(dto: Post): Promise<void> {
    await this.postCudRepository.save(dto);
  }

  async delete(id: number): Promise<void> {
    await this.postCudRepository.delete(id);
  }

  /* TODO:
     * Post 내용 전부가 아니라 하나 또는 그 이상 바뀔 수 있으므로, 이에 대한 예외처리 필요
  */
  async update(dto: HttpPostUpdateDto): Promise<Post> {
    const post: Post = await this.postReadRepository.findOne(dto.post_id);

    if (!post) {
      throw new NotFoundException({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: ["POST_INFORMATION_DOES_NOT_FOUND"],
        error: "not found"
      });
    }

    const updatedPost = Builder<Post>()
      .post_id(post.post_id)
      .post_author(post.post_author)
      .post_title(dto.post_title)
      .post_content(dto.post_content)
      .build();

    await this.postCudRepository.save(updatedPost);
    return updatedPost;
  }

  async findAll(): Promise<Post[]> {
    return [];
  }

  async findOne(): Promise<Post> {
    return new Post();
  }

  async findAllByQueryOptions(): Promise<Post | Post[]> {
    return new Post();
  }

}
