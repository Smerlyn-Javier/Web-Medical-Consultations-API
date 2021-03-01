import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Medicine, medicineSchemaDocument } from 'src/schema/medicine.schema';
import {Model} from 'mongoose'

@Injectable()
export class MedicineService {

    constructor(@InjectModel(Medicine.name) private medicineModel:Model<medicineSchemaDocument>){}

    findAllMedicine(){
        return this.medicineModel.find();
    }


    findOneMedicine( medicineId){
        return this.medicineModel.findById(medicineId);
    }


    createOneMedicine(medicineInfo){
        return this.medicineModel.create(medicineInfo);
    }


    updateOneMedicine(medicineId,medicineInfo){
        return this.medicineModel.findByIdAndUpdate(medicineId,medicineInfo);
    }


    deleteOneMedicine(medicineId){
        return this.medicineModel.findByIdAndDelete(medicineId);
    }
}
