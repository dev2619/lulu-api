import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module'; // Import ApplicationModule
// Remove InfrastructureModule import

@Module({
  imports: [
    ApplicationModule, // Import Application layer (which imports Infrastructure)
  ],
  controllers: [], // Root module usually doesn't declare controllers directly
  providers: [], // Root module usually doesn't declare providers directly
})
export class AppModule {}
