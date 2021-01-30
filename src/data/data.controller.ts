import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDataDto } from './dto/create-data.dto';
import { Data } from './schemas/data.schema';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async create(@Body() createDataDto: CreateDataDto) {
    await this.dataService.create(createDataDto);
  }

  @Get()
  async findAll(): Promise<Data[]> {
    return this.dataService.findAll();
  }
}
