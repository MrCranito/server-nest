import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from './../../config/auth/jwt.config';

@Module({
  imports: [
    JwtModule.register({
      secret: JwtConfig.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  exports: [JwtModule],
})
export class JwtAppModule {}
