import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'
import * as mongoose from 'mongoose';

export type associatedPharmacySchemaDocument = AssociatedPharmacy & Document;

@Schema()
export class AssociatedPharmacy {
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'DoctorOffice' })
    doctorOfficeId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy' })
    pharmacyId: string;
   
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const AssociatedPharmacySchema = SchemaFactory.createForClass(AssociatedPharmacy);