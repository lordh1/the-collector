import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-hash';
import { AuthService } from '../auth.service';

@Injectable()
export class HashStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(hash: string) {
    return this.authService.validateClient(hash);
  }
}
