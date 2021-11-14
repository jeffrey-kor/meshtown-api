import { Inject, Injectable } from '@nestjs/common';

import { User } from '../../domain/User';
import { HttpCudUserRepository } from '../../infrastructure/repository/http.cud.user.repository';
import { HttpRUserRepository } from '../../infrastructure/repository/http.r.user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Encryption } from 'src/common/security/encryption/Encryption';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userCudRepository: HttpCudUserRepository,
    @InjectRepository(User) private readonly userReadRepository: HttpRUserRepository,
    @Inject(Encryption) private readonly encryption: Encryption
  ) {}

  test(): string {
    return "Hello, world!";
  }

  async register(req: User): Promise<void> {
    req.user_password = await this.encryption.hash(req.user_password);
    console.log(req.user_password);
    await this.userCudRepository.save(req);
  }

  async delete(req: number): Promise<void> {
    const user: Promise<User> = this.userReadRepository.findOneById(req);
    if (user === undefined) {}
    await this.userCudRepository.delete(req);
  }

  async findAll(): Promise<User[]> {
    return await this.userReadRepository.find();
  }

  async findOne(req: number): Promise<User | undefined> {
    return await this.userReadRepository.findOne(req);
  }

}