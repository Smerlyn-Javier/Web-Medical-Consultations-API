import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type scheduleSchemaDocument = Schedule & Document;

@Schema()
export class Schedule {
    
    @Prop()
    Schedule: string;

    @Prop()
    day: string;

    @Prop()
    startTime: string;

    @Prop()
    endTime: string;
   
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);