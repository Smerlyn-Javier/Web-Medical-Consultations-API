import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';

@Controller('medical-history')
export class MedicalHistoryController {

    constructor(private readonly medicalHistoryService:MedicalHistoryService){}

    @Get()
    findAllMedicalHistory(){
        return this.medicalHistoryService.findAllMedicalHistory();
    }

    @Get(':medicalHistoryId')
    findOneMedicalHistory(@Param('medicalHistoryId') medicalHistoryId){
        return this.medicalHistoryService.findOneMedicalHistory(medicalHistoryId);
    }

    @Post()
    createOneMedicalHistory(@Body() medicalHistoryInfo){
        return this.medicalHistoryService.createOneMedicalHistory(medicalHistoryInfo);
    }

    @Patch(':medicalHistoryId')
    updateOneMedicalHistory(@Param('medicalHistoryId') medicalHistoryId, @Body() medicalHistoryInfo){
        return this.medicalHistoryService.updateOneMedicalHistory(medicalHistoryId,medicalHistoryInfo);
    }

    @Delete(':medicalHistoryId')
    deleteOneMedicalHistory(@Param('medicalHistoryId') medicalHistoryId){
        return this.medicalHistoryService.deleteOneMedicalHistory(medicalHistoryId);
    }
}
