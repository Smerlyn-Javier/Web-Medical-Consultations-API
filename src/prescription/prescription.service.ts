import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Prescription, prescriptionSchemaDocument } from 'src/schema/prescription.schema';
import {Model} from 'mongoose'

@Injectable()
export class PrescriptionService {

    constructor(@InjectModel(Prescription.name) private prescriptionModel:Model<prescriptionSchemaDocument>){}

    findAllPrescription(){
        return this.prescriptionModel.find();
    }


    findOnePrescription(prescriptionId){
        return this.prescriptionModel.findById(prescriptionId);
    }


    createOnePrescription(prescriptionInfo){
        return this.prescriptionModel.create(prescriptionInfo);
    }

    updateOnePrescription( prescriptionId, prescriptionInfo){
        return this.prescriptionModel.findByIdAndUpdate(prescriptionId,prescriptionInfo);
    }

    deleteOnePrescription(prescriptionId){
        return this.prescriptionModel.findByIdAndDelete(prescriptionId);
    }
}
