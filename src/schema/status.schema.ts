import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'

export type statusSchemaDocument = Status & Document;

@Schema()
export class Status {
    @Prop()
    status: string;
    @Prop()
    statusDescription: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);