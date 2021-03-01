import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type prescriptionSchemaDocument = Prescription & Document;

@Schema()
export class Prescription {

    @Prop()
    pacientId:string;

     @Prop()
     prescriptionDescription:string;

     @Prop()
     prescriptionDate:string;

     @Prop()
     medicineId:string;

     @Prop()
     prescriptionNote:string;

     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
     statusId: string;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);