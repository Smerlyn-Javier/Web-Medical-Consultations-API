import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Status, statusSchemaDocument } from 'src/schema/status.schema';
import {Model} from 'mongoose'

@Injectable()
export class StatusService {
constructor(@InjectModel(Status.name) private statusModel:Model<statusSchemaDocument> ){}

    findAllStatus(){
        return this.statusModel.find();
    }
    findOneStatus(statusId){
        return this.statusModel.findById(statusId);
    }
    createOneStatus(statusInfo){
        return this.statusModel.create(statusInfo);
    }
    updateOneStatus(statusId,statusInfo){
        return this.statusModel.findByIdAndUpdate(statusId,statusInfo);
    }
    deleteOneStatus(statusId){
        return this.statusModel.findByIdAndDelete(statusId);
    }
}
