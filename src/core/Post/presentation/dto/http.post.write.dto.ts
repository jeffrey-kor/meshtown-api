import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Builder } from 'builder-pattern';
import { Post } from '../../domain/Post';

export class HttpPostWriteDto {

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  post_author: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  post_title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  post_content: string;

  static of(user_id, postAuthor, postTitle, postContent): HttpPostWriteDto {
    const dto = new HttpPostWriteDto();
    dto.user_id = user_id;
    dto.post_author = postAuthor;
    dto.post_title = postTitle;
    dto.post_content = postContent;
    return dto;
  }

  toEntity(): Post {
    return Builder<Post>()
      .post_author(this.post_author)
      .post_title(this.post_title)
      .post_content(this.post_content)
      .build();
  }

}