import { Injectable } from '@nestjs/common';
import { CreateSamsaDto } from './dto/create-samsa.dto';
import { UpdateSamsaDto } from './dto/update-samsa.dto';
import { Samsa } from './entities/samsa.entity';

@Injectable()
export class SamsasService {
  private samsas: Samsa[] = [];
  private idCounter = 1;

  create(createSamsaDto: CreateSamsaDto) {
    const newSamsa: Samsa = { id: this.idCounter++, ...createSamsaDto };
    this.samsas.push(newSamsa);
    return newSamsa;
  }

  findAll() {
    return this.samsas;
  }

  findOne(id: number) {
    return this.samsas.find(s => s.id === id);
  }

  update(id: number, updateSamsaDto: UpdateSamsaDto) {
    const samsa = this.findOne(id);
    if (!samsa) return null;
    Object.assign(samsa, updateSamsaDto);
    return samsa;
  }

  remove(id: number) {
    const index = this.samsas.findIndex(s => s.id === id);
    if (index === -1) return null;
    const deleted = this.samsas[index];
    this.samsas.splice(index, 1);
    return deleted;
  }
}
