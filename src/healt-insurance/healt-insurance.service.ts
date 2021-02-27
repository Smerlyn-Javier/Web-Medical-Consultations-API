import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HealtInsurance, healtInsuranceSchemaDocument } from 'src/schema/healthInsurance.schema';
import {Model} from 'mongoose';

@Injectable()
export class HealtInsuranceService {

    constructor(@InjectModel(HealtInsurance.name) private healtInsuranceModel:Model<healtInsuranceSchemaDocument>){}

    findAllHealtInsurance(){
        return this.healtInsuranceModel.find();
    }

    findOneHealtInsurance(healtInsuranceId){
        return this.healtInsuranceModel.findById(healtInsuranceId);
    }

    createOneHealtInsurance(healtInsuranceInfo){
        return this.healtInsuranceModel.create(healtInsuranceInfo);
    }

    updateOneHealtInsurance(healtInsuranceId,healtInsuranceInfo){
        return this.healtInsuranceModel.findByIdAndUpdate(healtInsuranceId,healtInsuranceInfo);
    }

    deleteOneHealtInsurance(healtInsuranceId){
        return this.healtInsuranceModel.findByIdAndDelete(healtInsuranceId);
    }
}
