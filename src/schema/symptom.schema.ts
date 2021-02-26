import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type symptomSchemaDocument = Symptom & Document;

@Schema()
export class Symptom {
    @Prop()
    symptomName: string;
    @Prop()
    symptomDescription: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pacient' })
    pacientId: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const SymptomSchema = SchemaFactory.createForClass(Symptom);