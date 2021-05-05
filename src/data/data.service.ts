import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Data, DataDocument } from './schemas/data.schema';
import { CreateDataDto } from './dto/create-data.dto';

type conditionsType = {
  name: string;
  timestampFrom: number;
  timestampTo: number;
};

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<DataDocument>) {}

  async create(createDataDto: CreateDataDto): Promise<Data> {
    const createdData = new this.dataModel(createDataDto);
    return createdData.save();
  }

  async findAll(): Promise<Data[]> {
    return this.dataModel.find().exec();
  }

  async findByConditions({
    name,
    timestampFrom,
    timestampTo,
  }: conditionsType): Promise<Data[]> {
    return this.dataModel
      .find({ name, timestamp: { $gt: timestampFrom, $lt: timestampTo } })
      .exec();
  }
}
