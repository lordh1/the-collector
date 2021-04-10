import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DataDocument = Data & Document;

@Schema()
export class Data {
  @Prop()
  timestamp: number;

  @Prop()
  name: string;

  @Prop()
  content: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
