import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}