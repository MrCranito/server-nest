import { Module } from '@nestjs/common';

import { ConfigEnvModule } from './config/env/config.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { UrlModule } from './modules/url/url.module';
import { EmailModule } from './modules/email/email.module';
import { I18nModule } from 'nestjs-i18n';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    I18nModule.forRootAsync({
      useFactory: () => ({
        fallbackLanguage: 'en',
        loaderOptions: {
          path: join(__dirname, '/i18n/'),
          watch: true,
        },
      }),
      inject: [ConfigService],
    }),
    ConfigEnvModule,
    AuthModule,
    UsersModule,
    UrlModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
