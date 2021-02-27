import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type pacientSchemaDocument = Pacient & Document;

@Schema()
export class Pacient {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'HealthInsurer' })
    healthInsurerId: string;

    @Prop()
    healtInsuranceNumber: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Symptom' })
    symptomId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const PacientSchema = SchemaFactory.createForClass(Pacient);