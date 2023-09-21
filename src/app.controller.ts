import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './v1/users/user.service';
import { Public } from './v1/auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
