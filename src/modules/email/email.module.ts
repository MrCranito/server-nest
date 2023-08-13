import { Module } from '@nestjs/common';
import { EmailService } from './services/email.service';
import { UrlModule } from '../url/url.module';
import { JwtAppModule } from '../jwt/jwt.module';
import { CodeModule } from '../code/code.module';

@Module({
  imports: [JwtAppModule, UrlModule, CodeModule],
  controllers: [],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
