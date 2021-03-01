import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';

@Controller('prescription')
export class PrescriptionController {

    constructor(private readonly prescriptionService:PrescriptionService){}

    @Get()
    findAllPrescription(){
        return this.prescriptionService.findAllPrescription();
    }

    @Get(':prescriptionId')
    findOnePrescription(@Param('prescriptionId') prescriptionId){
        return this.prescriptionService.findOnePrescription(prescriptionId);
    }

    @Post()
    createOnePrescription(@Body() prescriptionInfo){
        return this.prescriptionService.createOnePrescription(prescriptionInfo);
    }

    @Patch(':prescriptionId')
    updateOnePrescription(@Param('prescriptionId') prescriptionId, @Body() prescriptionInfo){
        return this.prescriptionService.updateOnePrescription(prescriptionId,prescriptionInfo);
    }

    @Delete(':prescriptionId')
    deleteOnePrescription(@Param('prescriptionId') prescriptionId){
        return this.prescriptionService.deleteOnePrescription(prescriptionId);
    }
}
