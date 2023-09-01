import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Create an user
   */
  @Post('create')
  async signupUser(
    @Body(new ValidationPipe()) userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  /**
   * Obtain an specific user
   */
  @Get('/:id')
  async getUser(
    @Param('id', new ValidationPipe()) id: string,
  ): Promise<UserModel> {
    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      id: Number(id), // Assuming 'id' is the unique identifier field
    };
    return this.userService.user(userWhereUniqueInput);
  }
}
