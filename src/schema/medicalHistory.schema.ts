import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type medicalHistorySchemaDocument = MedicalHistory & Document;

@Schema()
export class MedicalHistory {
    
    @Prop()
    date: string;

    @Prop()
    lastModification: string;

    @Prop()
    ledicalDescription: string;

    @Prop()
    allergyId: string;

    @Prop()
    vitalConstantId: string;

    @Prop()
    conditionId: string;

    @Prop()
    vaccineId: string;

    @Prop()
    labResultId: string;

    @Prop()
    medicationId: string;

    @Prop()
    operationId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;

}

export const MedicalHistorySchema = SchemaFactory.createForClass(MedicalHistory);