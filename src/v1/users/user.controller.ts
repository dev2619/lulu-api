import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User, User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Obtain all users
   */
  @Get()
  async getAllUsers(
    @Query()
    query: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    },
  ): Promise<User[]> {
    return this.userService.users(query);
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
    const user = await this.userService.user(userWhereUniqueInput);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

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
   * Update an user
   */
  @Put('/:id')
  async updateUser(
    @Param('id', new ValidationPipe({ transform: true })) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    const user = await this.userService.user({ id: Number(id) });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updateUserInput: Prisma.UserUpdateInput = {
      ...updateUserDto,
    };

    return this.userService.updateUser({
      where: { id: Number(id) },
      data: updateUserInput,
    });
  }

  /**
   * Delete an user
   */
  @Delete('/:id')
  async dropUser(
    @Param('id', new ValidationPipe({ transform: true })) id: string,
  ): Promise<UserModel> {
    const user = await this.userService.user({ id: Number(id) });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const userWhereUniqueInput: Prisma.UserWhereUniqueInput = {
      id: Number(id), // Assuming 'id' is the unique identifier field
    };
    const deleteUser = await this.userService.deleteUser(userWhereUniqueInput);

    return deleteUser;
  }
}
