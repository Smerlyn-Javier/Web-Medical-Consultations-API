import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentMethod, paymentMethodSchemaDocument } from 'src/schema/paymentMethod.schema';
import {Model} from 'mongoose'

@Injectable()
export class PaymentMethodService {

    constructor(@InjectModel(PaymentMethod.name) private paymentMethodModel:Model<paymentMethodSchemaDocument>){}

    findAllPaymentMethod(){
        return this.paymentMethodModel.find();
    }

    findOnePaymentMethod(paymentMethodId){
        return this.paymentMethodModel.findById(paymentMethodId);
    }
 

    createOnePaymentMethod( paymentMethodInfo){
        return this.paymentMethodModel.create(paymentMethodInfo);
    }

    updateOnePaymentMethod(paymentMethodId, paymentMethodInfo){
        return this.paymentMethodModel.findByIdAndUpdate(paymentMethodId,paymentMethodInfo);
    }
 

    deleteOnePaymentMethod(paymentMethodId){
        return this.paymentMethodModel.findByIdAndDelete(paymentMethodId);
    }
}
