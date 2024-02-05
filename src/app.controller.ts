import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(@Req() request: Request): object {
    console.log(request);
    return request.body;
  }
}
