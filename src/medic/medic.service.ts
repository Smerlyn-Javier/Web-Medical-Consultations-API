import { Injectable } from '@nestjs/common';
import { Medic, medicSchemaDocument } from 'src/schema/medic.schema';
import{Model} from 'mongoose' 
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MedicService {

     constructor(@InjectModel(Medic.name) private medicModel:Model<medicSchemaDocument>){}

    findAllMedic(){
        return this.medicModel.find();
    }

    findOneMedic(medicId){
        return this.medicModel.findById(medicId);
    }

    createOneMedic(medicInfo){
        return this.medicModel.create(medicInfo);
    }

    updateOneMedic(medicId, medicInfo){
        return this.medicModel.findByIdAndUpdate(medicId,medicInfo);
    }

    deleteOneMedic(medicId){
        return this.medicModel.findByIdAndDelete(medicId);
    }
}
