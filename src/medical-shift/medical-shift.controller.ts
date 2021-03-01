import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicalShiftService } from './medical-shift.service';


@Controller('medical-shift')
export class MedicalShiftController {

    constructor(private readonly medicalShiftService:MedicalShiftService){}

    @Get()
    findAllMedicalShift(){
        return this.medicalShiftService.findAllMedicalShift();
    }

    @Get(':medicalShiftId')
    findOneMedicalShift(@Param('medicalShiftId') medicalShiftId){
        return this.medicalShiftService.findOneMedicalShift(medicalShiftId);
    }

    @Post()
    createOneMedicalShift(@Body() medicalShiftInfo){
        return this.medicalShiftService.createOneMedicalShift(medicalShiftInfo);
    }

    @Patch(':medicalShiftId')
    updateOneMedicalShift(@Param('medicalShiftId') medicalShiftId, @Body() medicalShiftInfo){
        return this.medicalShiftService.updateOneMedicalShift(medicalShiftId,medicalShiftInfo);
    }

    @Delete(':medicalShiftId')
    deleteOneMedicalShift(@Param('medicalShiftId') medicalShiftId){
        return this.medicalShiftService.deleteOneMedicalShift(medicalShiftId);
    }
}
