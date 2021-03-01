import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type medicineComponentSchemaDocument = MedicineComponent & Document;

@Schema()
export class MedicineComponent {

    @Prop()
    componentName: string;

    @Prop()
    componentDescription: string;

    @Prop()
    componentReaction: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const MedicineComponentSchema = SchemaFactory.createForClass(MedicineComponent);