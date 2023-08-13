import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Artist } from '../entities/artist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private repository: Repository<Artist>,
  ) {}

  async find(query: any): Promise<Artist[]> {
    return this.repository.find(query);
  }

  async findOne(query: any): Promise<Artist> {
    return this.repository.findOne(query);
  }

  async create(body: any): Promise<Artist> {
    return this.repository.save(body);
  }

  async patch(body: any): Promise<Artist> {
    let artist: Artist = await this.repository
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

    artist = { ...artist, ...body };

    return this.repository.save(artist);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
