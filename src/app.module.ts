import { Module } from '@nestjs/common';

import { ConfigEnvModule } from './config/env/config.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UrlModule } from './modules/url/url.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [ConfigEnvModule, AuthModule, UsersModule, UrlModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
