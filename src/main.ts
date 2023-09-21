import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  // Configure CORS to allow all origins
  app.enableCors();

  // Setup Swagger docs
  const config = new DocumentBuilder()
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .setTitle('Lulu Api')
    .setDescription('The lulu API is here ⚡')
    .setVersion('1.0')
    .addTag('lulu')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'Custom-Header',
  });

  console.log(`app on top ⚡ http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
