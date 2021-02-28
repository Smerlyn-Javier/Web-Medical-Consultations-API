import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Schedule, scheduleSchemaDocument } from 'src/schema/schedule.schema';
import {Model} from 'mongoose'

@Injectable()
export class ScheduleService {

   constructor(@InjectModel(Schedule.name) private scheduleModel:Model<scheduleSchemaDocument>){}

    findAllSchedule(){
        return this.scheduleModel.find();
    }


    findOneSchedule( scheduleId){
        return this.scheduleModel.findById(scheduleId);
    }


    createOneSchedule(scheduleInfo){
        return this.scheduleModel.create(scheduleInfo);
    }


    updateOneSchedule(scheduleId,scheduleInfo){
        return this.scheduleModel.findByIdAndUpdate(scheduleId,scheduleInfo);
    }


    deleteOneSchedule(scheduleId){
        return this.scheduleModel.findByIdAndDelete(scheduleId);
    }
}
