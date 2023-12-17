import { Module } from '@nestjs/common';
import { PigsService } from './pigs.service';
import { PigsController } from './pigs.controller';

@Module({
  controllers: [PigsController],
  providers: [PigsService],
})
export class PigsModule {}
