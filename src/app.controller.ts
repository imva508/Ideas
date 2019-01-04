import { Controller, Get } from '@nestjs/common';

@Controller("/api/app")
export class AppController {

  @Get()
  getHello(): any {
    return {name:"varun"};
  }
}
