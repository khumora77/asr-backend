import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Samsa {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

// 👉 Type alias qo‘shamiz
export type SamsaDocument = Samsa & Document;

// 👉 Schema factory
export const SamsaSchema = SchemaFactory.createForClass(Samsa);
