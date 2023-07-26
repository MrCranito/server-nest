import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IAppConfig } from './config/env/interfaces/app.config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const configService = app.get(ConfigService);

  const appConfig = configService.get<IAppConfig>('app');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      enableDebugMessages: true,
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.startAllMicroservices();

  await app.listen(appConfig.port);

  console.log(
    `Backoffice-api (${appConfig.version})listening on port : ${appConfig.port}`,
  );

  return app;
}

export default bootstrap();
