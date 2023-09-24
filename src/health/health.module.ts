import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { HttpModule } from '@nestjs/axios';
import { TerminusLogger } from './terminus-logger.service';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    TerminusModule.forRoot({
      logger: TerminusLogger,
      errorLogStyle: 'pretty',
    }),
  ],
  controllers: [HealthController],
})
export class HealthModule {}
