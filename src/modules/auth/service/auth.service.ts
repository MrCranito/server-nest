import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../users/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { HashServiceHelper } from './../../../shared/helpers/hash.helper';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private hashService: HashServiceHelper,
  ) {}

  async validateUserCredentials(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    const isPasswordValid = await this.hashService.comparePassword(
      password,
      user?.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async loginWithCredentials(user: any) {
    const payload = { email: user.email };
    return {
      token: await this.jwtService.sign(payload),
    };
  }

  async createJwt(email: string) {
    const payload = { email };
    return {
      token: await this.jwtService.sign(payload),
    };
  }
}
