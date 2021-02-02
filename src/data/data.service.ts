import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Data, DataDocument } from './schemas/data.schema';
import { CreateDataDto } from './dto/create-data.dto';

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
}
