import { DeepPartial, EntityRepository, Repository, SaveOptions } from 'typeorm';
import { User } from '../../domain/User';

@EntityRepository(User)
export class HttpCudUserRepository extends Repository<User> {}