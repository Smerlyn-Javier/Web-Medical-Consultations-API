import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicineComponent, medicineComponentSchemaDocument } from 'src/schema/medicineComponent.schema';
import {Model} from 'mongoose'

@Injectable()
export class MedicineComponentService {

    constructor(@InjectModel(MedicineComponent.name) private medicineComponentModel:Model<medicineComponentSchemaDocument> ){}

    findAllMedicineComponent(){
        return this.medicineComponentModel.find();
    }


    findOneMedicineComponent(medicineComponentId){
        return this.medicineComponentModel.findById(medicineComponentId);
    }

    createOneMedicineComponent( medicineComponentInfo){
        return this.medicineComponentModel.create(medicineComponentInfo);
    }


    updateOneMedicineComponent(medicineComponentId,  medicineComponentInfo){
        return this.medicineComponentModel.findByIdAndUpdate(medicineComponentId,medicineComponentInfo);
    }


    deleteOneMedicineComponent( medicineComponentId){
        return this.medicineComponentModel.findByIdAndDelete(medicineComponentId);
    }
}
