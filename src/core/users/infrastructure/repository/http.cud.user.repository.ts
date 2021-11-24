import { createQueryBuilder, DeepPartial, EntityRepository, Repository, SaveOptions } from 'typeorm';
import { User } from '../../domain/User';

@EntityRepository(User)
export class HttpCudUserRepository extends Repository<User> {

  async findOneByEmail(email: string) {
    const queryBuilder = createQueryBuilder()
      .select(["*"])
      .from(User, "user")
      .where(`user.email =:email`, { email: email })
    return await queryBuilder.getOne();
  }

  async deleteUserById(id: number) {
    const queryBuilder = createQueryBuilder()
      .delete()
      .from(User)
      .where(`id =:id`, { id: id })
      .execute();
  }

  async saveToken(token) {
    const queryBuilder = createQueryBuilder()
      .insert()
      .into(User)
      .values({
        token: token
      })
      .execute();
  }
}