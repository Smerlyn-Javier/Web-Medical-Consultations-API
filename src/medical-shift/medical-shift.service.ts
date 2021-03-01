import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalShift, medicalShiftSchemaDocument } from 'src/schema/medicalShift.schema';
import {Model} from 'mongoose'

@Injectable()
export class MedicalShiftService {

   constructor(@InjectModel(MedicalShift.name) private medicalShiftModel:Model<medicalShiftSchemaDocument>){}


    findAllMedicalShift(){
        return this.medicalShiftModel.find();
    }


    findOneMedicalShift( medicalShiftId){
        return this.medicalShiftModel.findById(medicalShiftId);
    }

    createOneMedicalShift(medicalShiftInfo){
        return this.medicalShiftModel.create(medicalShiftInfo);
    }

    updateOneMedicalShift(medicalShiftId,  medicalShiftInfo){
        return this.medicalShiftModel.findByIdAndUpdate(medicalShiftId,medicalShiftInfo);
    }


    deleteOneMedicalShift(medicalShiftId){
        return this.medicalShiftModel.findByIdAndDelete(medicalShiftId);
    }
}
