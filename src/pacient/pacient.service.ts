import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pacient, pacientSchemaDocument } from 'src/schema/pacient.schema';
import {Model} from 'mongoose'

@Injectable()
export class PacientService {

constructor(@InjectModel(Pacient.name) private PacientModel:Model<pacientSchemaDocument> ){}
    findAllPacient(){
        return this.PacientModel.find();
    }

    findOnePacient(pacientId){
        return this.PacientModel.findById(pacientId);
    }

    createOnePacient(pacientInfo){
        return this.PacientModel.create(pacientInfo);
    }

    updateOnePacient( pacientId,  pacientInfo){
        return this.PacientModel.findByIdAndUpdate(pacientId,pacientInfo);
    }

    deleteOnePacient(pacientId){
        return this.PacientModel.findByIdAndDelete(pacientId);
    }
}
