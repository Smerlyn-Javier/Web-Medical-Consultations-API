import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment, appointmentSchemaDocument } from 'src/schema/appointment.schema';
import {Model} from 'mongoose'

@Injectable()
export class AppointmentService {

    constructor(@InjectModel(Appointment.name) private appointmentModel:Model<appointmentSchemaDocument>){}

    findAllAppointment(){
        return this.appointmentModel.find();
    }


    findOneAppointment(appointmentId){
        return this.appointmentModel.findById(appointmentId);
    }


    createOneAppointment(appointmentInfo){
        return this.appointmentModel.create(appointmentInfo);
    }


    updateOneAppointment(appointmentId, appointmentInfo){
        return this.appointmentModel.findByIdAndUpdate(appointmentId,appointmentInfo);
    }


    deleteOneAppointment( appointmentId){
        return this.appointmentModel.findByIdAndDelete(appointmentId);
    }
}
