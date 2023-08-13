import { Injectable } from '@nestjs/common';
import { Code } from '../entities/code.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../../../modules/users/entities/user.entity';

@Injectable()
export class CodeService {
  constructor(
    @InjectRepository(Code)
    private repositoryCode: Repository<Code>,

    @InjectRepository(User)
    private repositoryUser: Repository<User>,
  ) {}

  async generateCode(email: string): Promise<Code> {
    const code: Code = {
      id: null,
      email,
      code: this.randomInteger(100000, 999999),
    };

    // archive all codes for this email before create a new one
    const codes = await this.repositoryCode.findBy({ email });
    codes.forEach(async (code) => {
      code.archivedAt = new Date();
      await this.repositoryCode.save(code);
    });

    return this.repositoryCode.save(code);
  }

  async validateCode(email: string, code: number): Promise<boolean> {
    const savedCode = await this.repositoryCode.findOneBy({
      email,
      code,
      archivedAt: null,
    });
    let user: User = null;
    if (savedCode.code) {
      user = await this.repositoryUser.findOneBy({ email });
      user = { ...user, isEmailConfirmed: true };
      await this.repositoryUser.save(user);
    }
    return user.isEmailConfirmed ? true : false;
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
