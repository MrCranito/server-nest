import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { CustomHttpErrors } from 'src/shared/errors/http.errors';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private repository: Repository<Event>) {}

  async find(query: any): Promise<Event[]> {
    return this.repository.find(query);
  }

  async findOne(id: string): Promise<Event> {
    return this.repository.findOne({ where: { id } });
  }

  async create(body: any): Promise<Event> {
    return this.repository.save(body);
  }

  async update(body: any): Promise<Event> {
    let event: Event = await this.repository
      .findOneOrFail({ where: { id: body.id } })
      .catch(() => {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: CustomHttpErrors.USER_NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        );
      });

    event = { ...event, ...body };

    return this.repository.save(event);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
