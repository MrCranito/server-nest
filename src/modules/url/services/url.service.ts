import { InjectRepository } from '@nestjs/typeorm';
import { ShortenURLDto } from '../dto/url.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Url } from '../entities/url.entity';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private repo: Repository<Url>,
  ) {}

  async shortenUrl(baseUrl: string, url: ShortenURLDto) {
    const { longUrl } = url;

    const uri = new URL(longUrl);

    // checks if longurl is a valid URL
    if (!uri.protocol) {
      throw new BadRequestException('String Must be a Valid URL');
    }

    let urlCode = nanoid(10);

    try {
      //check if the URL has already been shortened
      let url = await this.repo.findOneBy({ longUrl });
      //return it if it exists
      if (url) return url.shortUrl;

      //verify if the urlCode already exists
      url = await this.repo.findOneBy({ urlCode });
      if (url) {
        urlCode = nanoid(10);
      }
      //if it doesn't exist, shorten it
      const shortUrl = `${baseUrl}/${urlCode}`;

      //add the new record to the database
      url = this.repo.create({
        urlCode,
        longUrl,
        shortUrl,
      });

      this.repo.save(url);
      return url.shortUrl;
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException('Server Error');
    }
  }

  async getLongUrl(urlCode: string) {
    try {
      const url = await this.repo.findOneBy({ urlCode });
      if (url) return url;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Resource Not Found');
    }
  }
}
