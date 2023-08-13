import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';
import { DeleteResult } from 'typeorm';

@Controller('company')
export class CompanyController {
  constructor(private service: CompanyService) {}

  @Get()
  async find(@Query() query): Promise<Company[]> {
    const companies = await this.service.find(query);

    return companies;
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Company> {
    const company = await this.service.findOne(param.id);
    return company;
  }

  @Post()
  async create(@Body() body): Promise<Company> {
    const savedCompany = await this.service.create(body);

    return savedCompany;
  }

  @Patch()
  async patch(@Body() body): Promise<Company> {
    return this.service.patch(body);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<DeleteResult> {
    return this.service.delete(param.id);
  }
}
