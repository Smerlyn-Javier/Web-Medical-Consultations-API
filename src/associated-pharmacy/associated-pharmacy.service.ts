import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AssociatedPharmacy, associatedPharmacySchemaDocument } from 'src/schema/associatedPharmacy.schema';
import {Model} from 'mongoose'


@Injectable()
export class AssociatedPharmacyService {

    constructor(@InjectModel(AssociatedPharmacy.name) private associatedPharmacyModel:Model<associatedPharmacySchemaDocument>){}

    findAllAssociatedPharmacy(){
        return this.associatedPharmacyModel.find();
    }


    findOneAssociatedPharmacy( associatedPharmacyId){
        return this.associatedPharmacyModel.findById(associatedPharmacyId);
    }


    createOneAssociatedPharmacy(associatedPharmacyInfo){
        return this.associatedPharmacyModel.create(associatedPharmacyInfo);
    }


    updateOneAssociatedPharmacy(associatedPharmacyId, associatedPharmacyInfo){
        return this.associatedPharmacyModel.findByIdAndUpdate(associatedPharmacyId,associatedPharmacyInfo);
    }


    deleteOneAssociatedPharmacy(associatedPharmacyId){
        return this.associatedPharmacyModel.findByIdAndDelete(associatedPharmacyId);
    }
}
