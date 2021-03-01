import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMethod, PaymentMethodSchema } from 'src/schema/paymentMethod.schema';
import { PaymentMethodController } from './payment-method.controller';
import { PaymentMethodService } from './payment-method.service';

@Module({
    imports:[MongooseModule.forFeature([{name:PaymentMethod.name,schema:PaymentMethodSchema}])],
    providers:[PaymentMethodService],
    controllers:[PaymentMethodController],
    exports:[MongooseModule]
})
export class PaymentMethodModule {}
