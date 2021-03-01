import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type priceSchemaDocument = Price & Document;

@Schema()
export class Price {

    @Prop()
     price:string;

     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const PriceSchema = SchemaFactory.createForClass(Price);