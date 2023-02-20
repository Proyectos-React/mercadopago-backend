import { Injectable } from '@nestjs/common';
import * as mercadopago from 'mercadopago';

@Injectable()
export class AppService {

  constructor() {
    mercadopago.configurations.setAccessToken(
      'TEST-1020784863584062-021921-2abe467786f27008aa330d4260cbcd01-532205188',
    );
  }

  async processPayment(data: any): Promise<any>{
    try {
      const response = await mercadopago.payment.save(data);
      return response;
    } catch (error) {
      return error;
    }
  }
}
