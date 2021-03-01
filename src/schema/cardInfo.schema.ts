import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type cardInfoSchemaDocument = CardInfo & Document;

@Schema()
export class CardInfo {

    @Prop()
    CardName:string;

     @Prop()
     PacientId:string;

     @Prop()
     CardNumber:string;

     @Prop()
     CardExpiration:string;

     @Prop()
     CardCVC:string;

     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const CardInfoSchema = SchemaFactory.createForClass(CardInfo);