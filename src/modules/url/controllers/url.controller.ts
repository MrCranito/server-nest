import { Controller, Get, Param, Res } from '@nestjs/common';
import { UrlService } from '../services/url.service';
import { isPublic } from './../../../shared/decorators/ispublic.decorator';

@Controller('url')
export class UrlController {
  constructor(private service: UrlService) {}

  @isPublic()
  @Get(':id')
  async redirect(@Res() res, @Param() params: any) {
    const url = await this.service.getLongUrl(params.id);

    if (!url) throw new Error('USER NOT FOUND');
    return res.redirect(url.longUrl);
  }
}
