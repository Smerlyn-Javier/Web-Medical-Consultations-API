import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {

    constructor(private readonly appointmentService:AppointmentService){}

    @Get()
    findAllAppointment(){
        return this.appointmentService.findAllAppointment();
    }

    @Get(':appointmentId')
    findOneAppointment(@Param('appointmentId') appointmentId){
        return this.appointmentService.findOneAppointment(appointmentId);
    }

    @Post()
    createOneAppointment(@Body() appointmentInfo){
        return this.appointmentService.createOneAppointment(appointmentInfo);
    }

    @Patch(':appointmentId')
    updateOneAppointment(@Param('appointmentId') appointmentId, @Body() appointmentInfo){
        return this.appointmentService.updateOneAppointment(appointmentId,appointmentInfo);
    }

    @Delete(':appointmentId')
    deleteOneAppointment(@Param('appointmentId') appointmentId){
        return this.appointmentService.deleteOneAppointment(appointmentId);
    }
}
