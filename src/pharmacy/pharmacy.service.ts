import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pharmacy, PharmacySchemaDocument } from 'src/schema/pharmacy.schema';
import {Model} from 'mongoose'

@Injectable()
export class PharmacyService {

    constructor(@InjectModel(Pharmacy.name) private pharmacyModel:Model<PharmacySchemaDocument>){}

    findAllPharmacy(){
        return this.pharmacyModel.find();
    }


    findOnePharmacy(pharmacyId){
        return this.pharmacyModel.findById(pharmacyId);
    }


    createOnePharmacy(pharmacyInfo){
        return this.pharmacyModel.create(pharmacyInfo);
    }

    updateOnePharmacy(pharmacyId,pharmacyInfo){
        return this.pharmacyModel.findByIdAndUpdate(pharmacyId,pharmacyInfo);
    }

    deleteOnePharmacy(pharmacyId){
        return this.pharmacyModel.findByIdAndDelete(pharmacyId);
    }
}
