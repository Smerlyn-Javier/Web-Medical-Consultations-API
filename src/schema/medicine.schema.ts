import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type medicineSchemaDocument = Medicine & Document;

@Schema()
export class Medicine {

    @Prop()
    medicineName: string;

    @Prop()
    medicineDescription: string;

    @Prop()
    medicineLab: string;

    @Prop()
    medicineComponentId: string;

    @Prop()
    manufacturingDate: string;

    @Prop()
    expirationDate: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const MedicineSchema = SchemaFactory.createForClass(Medicine);