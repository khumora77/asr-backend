import { Module } from '@nestjs/common';
import { SamsasController } from './samsas.controller';
import { SamsasService } from './samsas.service';

@Module({
  controllers: [SamsasController],
  providers: [SamsasService]
})
export class SamsasModule {}
