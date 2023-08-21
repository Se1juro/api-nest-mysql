import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserValidator } from '../../validators/createUser.validator';
import { UsersService } from '../../users.service';

@Controller('/v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  createUser(@Body() user: CreateUserValidator) {
    return this.userService.createUser(user);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
