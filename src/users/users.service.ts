import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserValidator } from './validators/createUser.validator';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository) {}

  async createUser(user: CreateUserValidator) {
    const { email } = user;
    const currentUser = await this.usersRepository.findOne({
      where: { email },
    });
    if (currentUser)
      throw new BadRequestException('Email is already used', {
        description: 'A user with this emails exits',
        cause: new Error(),
      });

    const newUser = this.usersRepository.create(user);

    return await this.usersRepository.save(newUser);
  }

  async getAllUsers() {
    return await this.usersRepository.find();
  }

  async getUserById(id: number) {
    return await this.usersRepository.findOne({ where: { id } });
  }
}
