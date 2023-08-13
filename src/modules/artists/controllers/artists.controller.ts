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
import { ArtistsService } from '../services/artists.service';
import { Artist } from '../entities/artist.entity';
import { DeleteResult } from 'typeorm';

@Controller('artists')
export class ArtistsController {
  constructor(private artitsService: ArtistsService) {}

  @Get()
  find(@Query() query): Promise<Artist[]> {
    return this.artitsService.find(query);
  }

  @Get(':id')
  findOne(@Param() param): Promise<Artist> {
    return this.artitsService.findOne(param.id);
  }

  @Post()
  create(@Body() body): Promise<Artist> {
    return this.artitsService.create(body);
  }

  @Patch()
  patch(@Body() body): Promise<Artist> {
    return this.artitsService.patch(body);
  }

  @Delete(':id')
  delete(@Param() param): Promise<DeleteResult> {
    return this.artitsService.delete(param.id);
  }
}
