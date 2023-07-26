import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import { MailConfig } from './../../../config/mails/mail.config';
import { JwtService } from '@nestjs/jwt';
import { UrlService } from './../../../modules/url/services/url.service';

@Injectable()
export class EmailService {
  private nodemailerTransport: Mail;

  constructor(private jwtService: JwtService, private urlService: UrlService) {
    this.nodemailerTransport = createTransport({
      host: MailConfig.host,
      port: Number.parseInt(MailConfig.port, 10),
      auth: {
        user: MailConfig.user,
        pass: MailConfig.password,
      },
    });
  }

  sendMail(options: Mail.Options): Promise<any> {
    return this.nodemailerTransport.sendMail(options);
  }

  async sendVerificationLink(email: string): Promise<any> {
    const payload = { email };
    const token = this.jwtService.sign(payload, {
      secret: MailConfig.token,
      expiresIn: MailConfig.expiredIn,
    });

    const url = `${MailConfig.confirmUrl}?token=${token}`;

    const shortedUrl = await this.urlService.shortenUrl(MailConfig.confirmUrl, {
      longUrl: url,
    });

    const text = `Welcome to the application. To confirm the email address, click here: ${shortedUrl}`;

    return this.sendMail({
      to: email,
      subject: 'Email confirmation',
      text,
    });
  }

  async sendResetPasswordLink(email: string): Promise<any> {
    if (!email) return null;
    const payload = { email };
    const token = this.jwtService.sign(payload, {
      secret: MailConfig.token,
      expiresIn: MailConfig.expiredIn,
    });

    const url = `${MailConfig.confirmResetPasswordUrl}?token=${token}`;

    const text = `To reset the password, click here: ${url}`;

    return this.sendMail({
      to: email,
      subject: 'Reset password',
      text,
    });
  }
}
