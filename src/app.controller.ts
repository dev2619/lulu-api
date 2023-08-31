import { Controller, Get } from '@nestjs/common';
import { UserService } from './users/user.service';
import { PostService } from './posts/post.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
