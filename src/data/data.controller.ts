import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { HashAuthGuard } from 'src/auth/guards/hash-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DataService } from './data.service';
import { CreateDataDto } from './dto/create-data.dto';
import { Data } from './schemas/data.schema';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @UseGuards(HashAuthGuard)
  @Post(':hash')
  async create(@Body() createDataDto: CreateDataDto) {
    await this.dataService.create(createDataDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Data[]> {
    return this.dataService.findAll();
  }
}
