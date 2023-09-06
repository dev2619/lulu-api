import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './v1/users/user.service';
import { PostService } from './v1/posts/post.service';

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
