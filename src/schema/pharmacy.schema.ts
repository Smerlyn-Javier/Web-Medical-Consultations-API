import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type PharmacySchemaDocument = Pharmacy & Document;

@Schema()
export class Pharmacy {
    
    @Prop()
    pharmacyName: string;

    @Prop()
    pharmacyPhone: string;

    @Prop()
    pharmacyDirection: string;

    @Prop()
    pharmacyLogo: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const PharmacySchema = SchemaFactory.createForClass(Pharmacy);