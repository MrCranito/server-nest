export interface IMailConfig {
  confirmUrl: string;
  shortUrl: string;
  confirmResetPasswordUrl: string;
  host: string;
  service: string;
  port: string;
  user: string;
  password: string;
  token: string;
  expiredIn: string;
}

export const MailConfig: IMailConfig = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  confirmUrl:
    process.env.EMAIL_CONFIRMATION_URL || 'http://localhost:8080/confirm',
  shortUrl: process.env.EMAIL_SHORTURL || 'http://localhost:8080/url',
  confirmResetPasswordUrl:
    process.env.EMAIL_PASSWORD_RESET_URL ||
    'http://localhost:8080/reset-password',
  service: process.env.EMAIL_SERVICE || 'gmail',
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASSWORD,
  token: process.env.JWT_TOKEN || 'secret',
  expiredIn: process.env.JWT_EXPIRED_IN || '3600s',
};
