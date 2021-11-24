import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../domain/Post';

@EntityRepository(Post)
export class PostCudRepository extends Repository<Post> {}