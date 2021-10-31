import { Module } from '@nestjs/common';
import { UsersController } from './core/users/presentation/users.controller';
import { AdminController } from './core/admin/presentation/admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [UsersController, AdminController],
  providers: [],
})
  export class AppModule {}
