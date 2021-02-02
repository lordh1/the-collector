import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { ClientsController } from './clients/clients.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/the-collector'),
    DataModule,
    AuthModule,
    UsersModule,
    ClientsModule,
  ],
  controllers: [AuthController, UsersController, ClientsController],
  providers: [AppService],
})
export class AppModule {}
