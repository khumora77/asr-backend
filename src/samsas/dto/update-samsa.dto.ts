import { PartialType } from '@nestjs/mapped-types';
import { CreateSamsaDto } from './create-samsa.dto';

export class UpdateSamsaDto extends PartialType(CreateSamsaDto) {}
