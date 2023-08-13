import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from './../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { HashServiceHelper } from './../../shared/helpers/hash.helper';
import { UrlModule } from '../url/url.module';
import { EmailModule } from '../email/email.module';
import { JwtAppModule } from '../jwt/jwt.module';

@Module({
  imports: [UsersModule, UrlModule, EmailModule, PassportModule, JwtAppModule],
  providers: [AuthService, HashServiceHelper, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
