import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SamsasService } from './samsas.service';
import { CreateSamsaDto } from './dto/create-samsa.dto';
import { UpdateSamsaDto } from './dto/update-samsa.dto';

@Controller('samsas')
export class SamsasController {
  constructor(private readonly samsasService: SamsasService) {}

  @Post()
  create(@Body() createSamsaDto: CreateSamsaDto) {
    return this.samsasService.create(createSamsaDto);
  }

  @Get()
  findAll() {
    return this.samsasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.samsasService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSamsaDto: UpdateSamsaDto) {
    return this.samsasService.update(+id, updateSamsaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.samsasService.remove(+id);
  }
}
