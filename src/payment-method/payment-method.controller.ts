import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';

@Controller('payment-method')
export class PaymentMethodController {

   constructor(private readonly paymentMethodService:PaymentMethodService){}
     
   @Get()
   findAllPaymentMethod(){
       return this.paymentMethodService.findAllPaymentMethod();
   }

   @Get(':paymentMethodId')
   findOnePaymentMethod(@Param('paymentMethodId') paymentMethodId){
       return this.paymentMethodService.findOnePaymentMethod(paymentMethodId);
   }

   @Post()
   createOnePaymentMethod(@Body() paymentMethodInfo){
       return this.paymentMethodService.createOnePaymentMethod(paymentMethodInfo);
   }

   @Patch(':paymentMethodId')
   updateOnePaymentMethod(@Param('paymentMethodId') paymentMethodId, @Body() paymentMethodInfo){
       return this.paymentMethodService.updateOnePaymentMethod(paymentMethodId,paymentMethodInfo);
   }

   @Delete(':paymentMethodId')
   deleteOnePaymentMethod(@Param('paymentMethodId') paymentMethodId){
       return this.paymentMethodService.deleteOnePaymentMethod(paymentMethodId);
   }
}
