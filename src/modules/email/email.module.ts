import { Module } from '@nestjs/common';
import { EmailService } from './service/email.service';
import { JwtModule } from '@nestjs/jwt';
import { UrlModule } from '../url/url.module';

@Module({
  imports: [JwtModule, UrlModule],
  controllers: [],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
