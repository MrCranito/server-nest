import { Body, Controller, Post } from '@nestjs/common';
import { CodeService } from '../services/code.service';
import { CreateCodeDto, ValidateCodeDto } from '../dto/code.dto';
import { Code } from '../entities/code.entity';
import { isPublic } from './../../../shared/decorators/ispublic.decorator';

@Controller('code')
export class CodeController {
  constructor(private codeService: CodeService) {}

  @Post('generate')
  generateCode(@Body() body: CreateCodeDto): Promise<Code> {
    return this.codeService.generateCode(body.email);
  }

  @isPublic()
  @Post('validate')
  validateCode(@Body() body: ValidateCodeDto): Promise<boolean> {
    return this.codeService.validateCode(body.email, body.code);
  }
}
