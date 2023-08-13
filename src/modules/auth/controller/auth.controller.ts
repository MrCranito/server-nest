import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { isPublic } from './../../../shared/decorators/ispublic.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserService } from './../../../modules/users/services/user.service';
import { Jwt } from '../interfaces/jwt.interface';
import { User } from './../../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { MailConfig } from './../../../config/mails/mail.config';
import { EmailService } from './../../../modules/email/services/email.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  @isPublic()
  @Post('login')
  async signIn(@Request() req): Promise<Jwt | any> {
    // const user = await this.authService.validateUserCredentials(
    //   req.body.email,
    //   req.body.password,
    // );

    // if (!user.isEmailConfirmed) {
    //   return this.emailService.sendVerificationLink(user.email);
    // } else {
    //   return this.authService.loginWithCredentials(user);
    // }

    return this.authService.createJwt(req.body.email);
  }

  @isPublic()
  @Get()
  async redirectOnValidEmail(@Query() query): Promise<User> {
    let user: Partial<User> = {};
    try {
      user = await this.jwtService.verifyAsync(query?.token, {
        secret: MailConfig.token,
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Token is expired',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (!user.email) throw new UnauthorizedException();
    const userUpdated = await this.userService.updateEmailIsConfirmed(
      user?.email,
    );
    return userUpdated;
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req): Promise<User> {
    return this.userService.findOneByEmail(req?.user?.email);
  }
}
