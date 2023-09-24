import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from '../users/user.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /**
   * Generate Token for user login
   */
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signIn(@Body() signInDto: Login) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
