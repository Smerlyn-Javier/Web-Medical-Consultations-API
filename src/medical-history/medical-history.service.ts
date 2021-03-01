import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalHistory, medicalHistorySchemaDocument } from 'src/schema/medicalHistory.schema';
import {Model} from 'mongoose'

@Injectable()
export class MedicalHistoryService {

    constructor(@InjectModel(MedicalHistory.name) private medicalHistoryModel:Model<medicalHistorySchemaDocument>){}


    findAllMedicalHistory(){
        return this.medicalHistoryModel.find();
    }

    findOneMedicalHistory(medicalHistoryId){
        return this.medicalHistoryModel.findById(medicalHistoryId);
    }


    createOneMedicalHistory(medicalHistoryInfo){
        return this.medicalHistoryModel.create(medicalHistoryInfo);
    }

    updateOneMedicalHistory(medicalHistoryId, medicalHistoryInfo){
        return this.medicalHistoryModel.findByIdAndUpdate(medicalHistoryId,medicalHistoryInfo);
    }


    deleteOneMedicalHistory(medicalHistoryId){
        return this.medicalHistoryModel.findByIdAndDelete(medicalHistoryId);
    }
}
