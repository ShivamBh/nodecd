import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      json: 'data',
      test: "prop1",
      test2: "prop2"
    };
  }
}
