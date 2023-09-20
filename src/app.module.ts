import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './v1/users/users.module';
import { HabitModule } from './v1/habit/habit.module';

@Module({
  imports: [UsersModule, HabitModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
