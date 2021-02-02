import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './schemas/client.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    await this.clientsService.create(createClientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Client> {
    return this.clientsService.findOne(name);
  }
}
