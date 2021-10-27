import { Module } from '@nestjs/common';
import { UsersController } from './core/users/presentation/users.controller';
import { AdminController } from './core/admin/presentation/admin.controller';

@Module({
  imports: [],
  controllers: [UsersController, AdminController],
  providers: [],
})
export class AppModule {}
