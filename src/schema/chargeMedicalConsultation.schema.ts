import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';


export type chargeMedicalConsultationSchemaDocument = ChargeMedicalConsultation & Document;

@Schema()
export class ChargeMedicalConsultation {

    @Prop()
    pacientId:string;

     @Prop()
     healthInsuranceId:string;

     @Prop()
     description:string;

     @Prop()
     invoiceDate:string;

     @Prop()
     amountMedicalProcedure:string;

     @Prop()
     medicalConsultationTypeId:string;

     @Prop()
     medicalProcedureId:string;

     @Prop()
     paymentMethodId:string;

     @Prop()
     subTotal:string;

     @Prop()
     tax:string;

     @Prop()
     discount:string;

     @Prop()
     total:string;


     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const ChargeMedicalConsultationSchema = SchemaFactory.createForClass(ChargeMedicalConsultation);