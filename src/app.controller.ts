import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('process-payment')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async processPayment(@Body() body: any): Promise<any> {
    return this.appService.processPayment(body);
  }
}
