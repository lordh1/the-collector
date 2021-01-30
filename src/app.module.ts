import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/the-collector'),
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
