import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from './../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtConfig } from './../../config/auth/jwt.config';
import { HashServiceHelper } from './../../shared/helpers/hash.helper';
import { UrlModule } from '../url/url.module';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    UsersModule,
    UrlModule,
    EmailModule,
    PassportModule,
    JwtModule.register({
      secret: JwtConfig.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, HashServiceHelper, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
