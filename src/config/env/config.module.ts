import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from './interfaces/app.config';
import typeormConfig from './../../../typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    TypeOrmModule.forRoot(typeormConfig),
  ],
  controllers: [],
  providers: [],
})
export class ConfigEnvModule {}
