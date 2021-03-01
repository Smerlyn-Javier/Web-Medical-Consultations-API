import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type medicalProcedureSchemaDocument = MedicalProcedure & Document;

@Schema()
export class MedicalProcedure {
    
    @Prop()
    medicalProcedure: string;

    @Prop()
    medicalProcedureDescription: string;

    @Prop()
    priceId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalHistory' })
    medicalHistoryId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' })
    prescriptionId: string;
   
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const MedicalProcedureSchema = SchemaFactory.createForClass(MedicalProcedure);