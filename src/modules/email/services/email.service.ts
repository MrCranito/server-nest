import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import { MailConfig } from './../../../config/mails/mail.config';
import { JwtService } from '@nestjs/jwt';
import { CodeService } from './../../../modules/code/services/code.service';
import { verifyCodeTemplate } from './../../../templates/mails/verification/content';

@Injectable()
export class EmailService {
  private nodemailerTransport: Mail;

  constructor(
    private jwtService: JwtService,
    private codeService: CodeService,
  ) {
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

  async sendVerificationCode(email: string): Promise<any> {
    const code = await this.codeService.generateCode(email);

    const text = verifyCodeTemplate(code.code);

    return this.sendMail({
      to: email,
      subject: 'Email confirmation',
      html: text,
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
