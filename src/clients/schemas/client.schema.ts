import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  hash: string;

  @Prop()
  status: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
