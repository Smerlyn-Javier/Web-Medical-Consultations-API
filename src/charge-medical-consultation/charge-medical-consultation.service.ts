import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ChargeMedicalConsultation, chargeMedicalConsultationSchemaDocument } from 'src/schema/chargeMedicalConsultation.schema';
import {Model} from 'mongoose'


@Injectable()
export class ChargeMedicalConsultationService {

    constructor(@InjectModel(ChargeMedicalConsultation.name) private chargeMedicalConsultationModel:Model<chargeMedicalConsultationSchemaDocument> ){}

    findAllChargeMedicalConsultation(){
        return this.chargeMedicalConsultationModel.find();
    }


    findOneChargeMedicalConsultation(chargeMedicalConsultationId){
        return this.chargeMedicalConsultationModel.findById(chargeMedicalConsultationId);
    }


    createOneChargeMedicalConsultation(chargeMedicalConsultationInfo){
        return this.chargeMedicalConsultationModel.create(chargeMedicalConsultationInfo);
    }


    updateOneChargeMedicalConsultation(chargeMedicalConsultationId,chargeMedicalConsultationInfo ){
        return this.chargeMedicalConsultationModel.findByIdAndUpdate(chargeMedicalConsultationId,chargeMedicalConsultationInfo);
    }

    deleteOneChargeMedicalConsultation(chargeMedicalConsultationId){
        return this.chargeMedicalConsultationModel.findByIdAndDelete(chargeMedicalConsultationId);
    }
}
