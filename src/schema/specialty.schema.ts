import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type specialtySchemaDocument = Specialty & Document;

@Schema()
export class Specialty {
    
    @Prop()
    specialty: string;

    @Prop()
    specialtyDescription: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const SpecialtySchema = SchemaFactory.createForClass(Specialty);