import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.model';
import { CreateUserValidator } from './validators/createUser.validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async createUser(user: CreateUserValidator) {
    const newUser = this.usersRepository.create(user);

    return await this.usersRepository.save(newUser);
  }
}
