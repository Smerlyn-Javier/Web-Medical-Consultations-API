import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalProcedure, medicalProcedureSchemaDocument } from 'src/schema/medicalProcedure.schema';
import {Model } from 'mongoose'

@Injectable()
export class MedicalProcedureService {

    constructor(@InjectModel(MedicalProcedure.name)private medicalProcedureModel:Model<medicalProcedureSchemaDocument>){}

    findAllMedicalProcedure(){
        return this.medicalProcedureModel.find();
    }


    findOneMedicalProcedure( medicalProcedureId){
        return this.medicalProcedureModel.findById(medicalProcedureId);
    }

    createOneMedicalProcedure(medicalProcedureInfo){
        return this.medicalProcedureModel.create(medicalProcedureInfo);
    }


    updateOneMedicalProcedure(medicalProcedureId, medicalProcedureInfo){
        return this.medicalProcedureModel.findByIdAndUpdate(medicalProcedureId,medicalProcedureInfo);
    }

    deleteOneMedicalProcedure(medicalProcedureId){
        return this.medicalProcedureModel.findByIdAndDelete(medicalProcedureId);
    }
}
