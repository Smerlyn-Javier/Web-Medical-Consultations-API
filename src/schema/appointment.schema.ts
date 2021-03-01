import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type appointmentSchemaDocument = Appointment & Document;

@Schema()
export class Appointment {
    
    @Prop()
    pacientId: string;

    @Prop()
    medicId: string;

    @Prop()
    doctorOfficeId: string;

    @Prop()
    schedule: string;

    @Prop()
    date: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalProcedure' })
    medicalProcedureId: string;
   

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);