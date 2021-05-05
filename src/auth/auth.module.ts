import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ClientsModule } from 'src/clients/clients.module';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { HashStrategy } from './strategies/hash.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, HashStrategy],
  exports: [AuthService],
})
export class AuthModule {}
