import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './v1/users/users.module';
import { HabitModule } from './v1/habit/habit.module';
import { RoleModule } from './v1/role/role.module';
import { AuthModule } from './v1/auth/auth.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [AuthModule, UsersModule, HabitModule, RoleModule, HealthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
