import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';

export type healtInsuranceSchemaDocument = HealtInsurance & Document;

@Schema()
export class HealtInsurance {
    @Prop()
    healthInsuranceName: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const HealtInsuranceSchema = SchemaFactory.createForClass(HealtInsurance);