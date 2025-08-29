import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Samsa, SamsaDocument } from './samsa.schema';
import { CreateSamsaDto } from './dto/create-samsa.dto';
import { UpdateSamsaDto } from './dto/update-samsa.dto';

@Injectable()
export class SamsasService {
  constructor(
    @InjectModel(Samsa.name) private samsaModel: Model<SamsaDocument>,
  ) {}

  async create(createSamsaDto: CreateSamsaDto): Promise<Samsa> {
    const newSamsa = new this.samsaModel(createSamsaDto);
    return newSamsa.save();
  }

  async findAll(): Promise<Samsa[]> {
    return this.samsaModel.find().exec();
  }

  async findOne(id: string): Promise<Samsa> {
    const samsa = await this.samsaModel.findById(id).exec();
    if (!samsa) {
      throw new NotFoundException(`Samsa with ID "${id}" not found`);
    }
    return samsa;
  }

  async update(id: string, updateSamsaDto: UpdateSamsaDto): Promise<Samsa> {
    const samsa = await this.samsaModel
      .findByIdAndUpdate(id, updateSamsaDto, { new: true })
      .exec();

    if (!samsa) {
      throw new NotFoundException(`Samsa with ID "${id}" not found`);
    }
    return samsa;
  }

  async remove(id: string): Promise<Samsa> {
    const samsa = await this.samsaModel.findByIdAndDelete(id).exec();
    if (!samsa) {
      throw new NotFoundException(`Samsa with ID "${id}" not found`);
    }
    return samsa;
  }
}
