import { Module } from '@nestjs/common';
import { CodeService } from './services/code.service';
import { Code } from './entities/code.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeController } from './controllers/code.controller';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Code]), TypeOrmModule.forFeature([User])],
  controllers: [CodeController],
  providers: [CodeService],
  exports: [CodeService],
})
export class CodeModule {}
