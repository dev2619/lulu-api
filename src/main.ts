import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Import Swagger
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Lulu API')
    .setDescription('API para el sistema de monitoreo empresarial Lulu')
    .setVersion('1.0')
    // .addTag('eventos') // Tags can be added here or in controllers
    // .addTag('alertas')
    // .addTag('metricas')
    // .addTag('usuarios')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Setup Swagger UI endpoint at /api-docs

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger UI available at: ${await app.getUrl()}/api-docs`);
}
bootstrap();
