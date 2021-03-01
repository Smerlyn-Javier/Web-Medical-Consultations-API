import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type paymentMethodSchemaDocument = PaymentMethod & Document;

@Schema()
export class PaymentMethod {

    @Prop()
    paymentMethod:string;

     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);