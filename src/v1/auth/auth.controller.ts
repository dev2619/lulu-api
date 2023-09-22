import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from '../users/user.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Prisma, User } from '@prisma/client';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /**
   * Generate Token for user login
   */
  // @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signIn(@Body() signInDto: Login) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  /**
   * Obtain all users
   */
  @UseGuards(JwtAuthGuard)
  @Get('user')
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
}
