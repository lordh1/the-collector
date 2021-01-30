import { Model } from 'mongoose';
import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Data, DataDocument } from './schemas/data.schema';
import { CreateDataDto } from './dto/create-data.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<DataDocument>) {}

  @UseGuards(JwtAuthGuard)
  async create(createDataDto: CreateDataDto): Promise<Data> {
    const createdData = new this.dataModel(createDataDto);
    return createdData.save();
  }

  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Data[]> {
    return this.dataModel.find().exec();
  }
}
