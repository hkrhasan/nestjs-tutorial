import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(): string {
    return 'this is post hello';
  }

  responseHello(): string {
    return 'how are you?  ';
  }
}
