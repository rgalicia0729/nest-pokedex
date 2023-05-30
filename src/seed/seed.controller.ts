import { Controller, Post, Param, ParseIntPipe } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }

  @Post(':records')
  create(@Param('records', ParseIntPipe) records: number) {
    return this.seedService.executeSeed(records);
  }

}
