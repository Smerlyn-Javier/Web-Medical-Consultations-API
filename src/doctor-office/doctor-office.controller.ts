import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DoctorOfficeService } from './doctor-office.service';

@Controller('doctor-office')
export class DoctorOfficeController {

    constructor(private readonly doctorOfficeService:DoctorOfficeService){}

    @Get()
    findAllDoctorOffice(){
        return this.doctorOfficeService.findAllDoctorOffice();
    }

    @Get(':doctorOfficeId')
    findOneDoctorOffice(@Param('doctorOfficeId') doctorOfficeId){
        return this.doctorOfficeService.findOneDoctorOffice(doctorOfficeId);
    }
    @Post()
    createOneDoctorOffice(@Body() doctorOfficeInfo){
        return this.doctorOfficeService.createOneDoctorOffice(doctorOfficeInfo);
    }
    @Patch(':doctorOfficeId')
    updateOneDoctorOffice(@Param('doctorOfficeId') doctorOfficeId, @Body() doctorOfficeInfo){
        return this.doctorOfficeService.updateOneDoctorOffice(doctorOfficeId,doctorOfficeInfo);
    }
    @Delete(':doctorOfficeId')
    deleteOneDoctorOffice(@Param('doctorOfficeId') doctorOfficeId){
        return this.doctorOfficeService.deleteOneDoctorOffice(doctorOfficeId);
    }
}
