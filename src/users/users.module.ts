import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.model';
import { UserRepository } from './repositories/user.repository';
import { UsersController } from './controllers/v1/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
