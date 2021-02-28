import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type doctorOfficeSchemaDocument = DoctorOffice & Document;

@Schema()
export class DoctorOffice {
    
    @Prop()
    doctorOfficeName: string;

    @Prop()
    doctorOfficeDirection: string;

    @Prop()
    DoctorOfficePhone: string;

    @Prop()
    DoctorOfficeExt: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' })
    ScheduleId: string;
   
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const DoctorOfficeSchema = SchemaFactory.createForClass(DoctorOffice);