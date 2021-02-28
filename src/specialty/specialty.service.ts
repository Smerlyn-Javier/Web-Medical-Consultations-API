import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Specialty, specialtySchemaDocument } from 'src/schema/specialty.schema';
import {Model} from 'mongoose'


@Injectable()
export class SpecialtyService {

    constructor(@InjectModel(Specialty.name) private specialtyModel:Model<specialtySchemaDocument>){}

    findAllSpecialty(){
        return this.specialtyModel.find();
    }


    findOneSpecialty(specialtyId){
        return this.specialtyModel.findById(specialtyId);
    }


    createOneSpecialty(specialtyInfo){
        return this.specialtyModel.create(specialtyInfo);
    }


    updateOneSpecialty(specialtyId,specialtyInfo){
        return this.specialtyModel.findByIdAndUpdate(specialtyId,specialtyInfo);
    }

    deleteOneSpecialty(specialtyId){
        return this.specialtyModel.findByIdAndDelete(specialtyId);
    }
}
