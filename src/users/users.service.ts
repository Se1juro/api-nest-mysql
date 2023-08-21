import { Injectable } from '@nestjs/common';
import { CreateUserValidator } from './validators/createUser.validator';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  async createUser(user: CreateUserValidator) {
    const newUser = this.usersRepository.create(user);

    return await this.usersRepository.save(newUser);
  }
}
