import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      json: 'data',
      newProps: 'shibu',
      val: 'testing'
    };
  }
}
