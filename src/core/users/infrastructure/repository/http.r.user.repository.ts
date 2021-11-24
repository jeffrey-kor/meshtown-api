import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { User } from '../../domain/User';
import { plainToClass } from 'class-transformer';

@EntityRepository(User)
export class HttpRUserRepository extends Repository<User> {

  async findOneById(userId: number) {
    const queryBuilder = createQueryBuilder()
      .select(["*"])
      .from(User, "user")
      .where(`user.id =:id`, { id: userId });
    return await queryBuilder.getOne();
  }

  async findOneByEmail(email: string) {
    const queryBuilder = createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where(`user.user_email =:email`, { email: email })
    return await queryBuilder.getOne();
  }




  // async findUserName(userId: number): Promise<UserName> {
  //   const row = await this.findOneByUserId(userId);
  //   return plainToClass(UserName, row);
  // }

  // private async findOneByUserId(userId: number) {
  //   const queryBuilder = createQueryBuilder()
  //     .select(['user.firstName', 'user.lastName'])
  //     .from(User, 'user')
  //     .where(`user.id =:id`, { id: userId });
  //
  //   return await queryBuilder.getRawOne();
  // }



}