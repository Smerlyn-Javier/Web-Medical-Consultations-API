import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicalProcedureService } from './medical-procedure.service';

@Controller('medical-procedure')
export class MedicalProcedureController {

    constructor(private readonly medicalProcedureService:MedicalProcedureService){}

    @Get()
    findAllMedicalProcedure(){
        return this.medicalProcedureService.findAllMedicalProcedure();
    }

    @Get(':medicalProcedureId')
    findOneMedicalProcedure(@Param('medicalProcedureId') medicalProcedureId){
        return this.medicalProcedureService.findOneMedicalProcedure(medicalProcedureId);
    }

    @Post()
    createOneMedicalProcedure(@Body() medicalProcedureInfo){
        return this.medicalProcedureService.createOneMedicalProcedure(medicalProcedureInfo);
    }

    @Patch(':medicalProcedureId')
    updateOneMedicalProcedure(@Param('medicalProcedureId') medicalProcedureId, @Body() medicalProcedureInfo){
        return this.medicalProcedureService.updateOneMedicalProcedure(medicalProcedureId,medicalProcedureInfo);
    }

    @Delete(':medicalProcedureId')
    deleteOneMedicalProcedure(@Param('medicalProcedureId') medicalProcedureId){
        return this.medicalProcedureService.deleteOneMedicalProcedure(medicalProcedureId);
    }

}
