import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { IUser, UserService } from './user.service';

export type TGetUsersParams = {
  name: string;
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  addUser(@Body() user: CreateUserDto) {
    console.log('add user successfully !');
    return user;
  }

  @Get()
  getUsers(@Query() params: TGetUsersParams): Array<IUser> {
    return this.userService.findUserByName(params.name);
  }

  @Get(':id')
  getUserById(@Param('id') id: string): IUser {
    return this.userService.findUserById(id);
  }
}
