import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    InfrastructureModule,
    ApplicationModule,
  ],
})
export class AppModule {}
