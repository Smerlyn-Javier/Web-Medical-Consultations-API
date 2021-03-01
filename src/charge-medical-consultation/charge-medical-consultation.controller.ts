import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChargeMedicalConsultationService } from './charge-medical-consultation.service';

@Controller('charge-medical-consultation')
export class ChargeMedicalConsultationController {

    constructor(private readonly chargeMedicalConsultationService:ChargeMedicalConsultationService ){}

    @Get()
    findAllChargeMedicalConsultation(){
        return ''
    }

    @Get(':chargeMedicalConsultationId')
    findOneChargeMedicalConsultation(@Param('chargeMedicalConsultationId') chargeMedicalConsultationId){
        return ''
    }

    @Post()
    createOneChargeMedicalConsultation(@Body() chargeMedicalConsultationInfo){
        return ''
    }

    @Patch(':chargeMedicalConsultationId')
    updateOneChargeMedicalConsultation(@Param('chargeMedicalConsultationId') chargeMedicalConsultationId, @Body() chargeMedicalConsultationInfo ){
        return ''
    }

    @Delete(':chargeMedicalConsultationId')
    deleteOneChargeMedicalConsultation(@Param('chargeMedicalConsultationId') chargeMedicalConsultationId){
        return ''
    }

}
