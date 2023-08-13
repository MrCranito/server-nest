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
import { DeleteResult } from 'typeorm';
import { EventsService } from '../services/events.service';
import { Event } from '../entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  async find(@Query() query: any): Promise<Event[]> {
    return this.eventsService.find(query);
  }

  @Get('id')
  async findOne(@Query() query: any): Promise<Event> {
    return this.eventsService.findOne(query);
  }

  @Post()
  async create(@Body() body: any): Promise<Event> {
    return this.eventsService.create(body);
  }

  @Patch()
  async update(@Body() body: any): Promise<Event> {
    return this.eventsService.update(body);
  }

  @Delete('id')
  async delete(@Param() param: any): Promise<DeleteResult> {
    return this.eventsService.delete(param);
  }
}
