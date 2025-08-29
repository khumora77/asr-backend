import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SamsasService } from './samsas.service';
import { SamsasController } from './samsas.controller';
import { Samsa, SamsaSchema } from './samsa.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Samsa.name, schema: SamsaSchema }])],
  controllers: [SamsasController],
  providers: [SamsasService],
})
export class SamsasModule {}
