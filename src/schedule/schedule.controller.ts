import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {

    constructor(private readonly scheduleService:ScheduleService){}
    @Get()
    findAllSchedule(){
        return this.scheduleService.findAllSchedule();
    }

    @Get(':scheduleId')
    findOneSchedule(@Param('scheduleId') scheduleId){
        return this.scheduleService.findOneSchedule(scheduleId);
    }

    @Post()
    createOneSchedule(@Body() scheduleInfo){
        return this.scheduleService.createOneSchedule(scheduleInfo);
    }

    @Patch(':scheduleId')
    updateOneSchedule(@Param('scheduleId') scheduleId, @Body() scheduleInfo){
        return this.scheduleService.updateOneSchedule(scheduleId,scheduleInfo);
    }

    @Delete(':scheduleId')
    deleteOneSchedule(@Param('scheduleId') scheduleId){
        return this.scheduleService.deleteOneSchedule(scheduleId);
    }
}
