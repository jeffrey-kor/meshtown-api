import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../domain/Post';

@EntityRepository(Post)
export class PostReadRepository extends Repository<Post> {}