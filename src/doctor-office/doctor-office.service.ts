import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DoctorOffice, doctorOfficeSchemaDocument } from 'src/schema/doctorOffice.schema';

@Injectable()
export class DoctorOfficeService {

    constructor(@InjectModel(DoctorOffice.name) private doctorOfficeModel:Model<doctorOfficeSchemaDocument>){}

    findAllDoctorOffice(){
        return this.doctorOfficeModel.find();
    }


    findOneDoctorOffice( doctorOfficeId){
        return this.doctorOfficeModel.findById(doctorOfficeId);
    }

    createOneDoctorOffice(doctorOfficeInfo){
        return this.doctorOfficeModel.create(doctorOfficeInfo);
    }

    updateOneDoctorOffice( doctorOfficeId, doctorOfficeInfo){
        return this.doctorOfficeModel.findByIdAndUpdate(doctorOfficeId,doctorOfficeInfo);
    }

    deleteOneDoctorOffice( doctorOfficeId){
        return this.doctorOfficeModel.findByIdAndDelete(doctorOfficeId);
    }
}
