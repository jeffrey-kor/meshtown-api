import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './presentation/controller/users.controller';
import { UserService } from './application/service/user.service';
import { User } from './domain/User';
import { HttpCudUserRepository } from './infrastructure/repository/http.cud.user.repository';
import { HttpRUserRepository } from './infrastructure/repository/http.r.user.repository';
import { Encryption } from '../../common/security/encryption/Encryption';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserService, HttpCudUserRepository, HttpRUserRepository, Encryption],
  exports: [HttpRUserRepository, HttpCudUserRepository, UserService]
})
export class UserModules {}