import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-hash';

@Injectable()
export class HashStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(hash: string) {
    return hash === 'sdwqkjqw929291mmA$';
  }
}
