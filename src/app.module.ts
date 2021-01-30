import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/the-collector'),
    DataModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [AppService],
})
export class AppModule {}
