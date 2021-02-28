import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type medicSchemaDocument = Medic & Document;

@Schema()
export class Medic {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'DoctorOffice' })
    doctorOfficeId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' })
    specialtyId: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const MedicSchema = SchemaFactory.createForClass(Medic);