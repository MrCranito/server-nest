import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Company } from '../entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private repository: Repository<Company>,
  ) {}

  async find(query: any): Promise<Company[]> {
    return this.repository.find(query);
  }

  async findOne(query: any): Promise<Company> {
    return this.repository.findOne(query);
  }

  async create(body: any): Promise<Company> {
    return this.repository.save(body);
  }

  async patch(body: Partial<Company>): Promise<Company> {
    let company: Company = await this.repository
      .findOneOrFail({ where: { id: body.id } })
      .catch(() => {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: NotFoundError,
          },
          HttpStatus.NOT_FOUND,
        );
      });

    company = { ...company, ...body };
    return this.repository.save(company);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
