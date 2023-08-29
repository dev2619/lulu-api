import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  const config = new DocumentBuilder()
    .setTitle('Lulu Api')
    .setDescription('The lulu API is here ⚡')
    .setVersion('1.0')
    .addTag('lulu')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log(`app on top ⚡ http://localhost:${port}`);

  await app.listen(port);
}
bootstrap();
