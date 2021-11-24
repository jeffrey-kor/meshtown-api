import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import * as helmet from "helmet";
import { JwtAuthGuard } from './core/auth/guards/jwt-auth.guard';
// import * as csurf from 'csurf';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The Cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.use(helmet());
  // app.use(cookieParser());
  // app.use(csurf());
  // app.useGlobalGuards(new JwtAuthGuard(reflector)); // 이거 땜에 unauthorized 떳었음
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
  await app.listen(process.env.SERVER_PORT);
  console.log(`Server is running on ${process.env.SERVER_PORT}..`);
}

bootstrap();
