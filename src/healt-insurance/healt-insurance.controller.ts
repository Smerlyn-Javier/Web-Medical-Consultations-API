import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HealtInsuranceService } from './healt-insurance.service';

@Controller('healt-insurance')
export class HealtInsuranceController {

    constructor(private readonly healtInsuranceService:HealtInsuranceService){}
    @Get()
    findAllHealtInsurance(){
        return this.healtInsuranceService.findAllHealtInsurance();
    }
    @Get(':healtInsuranceId')
    findOneHealtInsurance(@Param('healtInsuranceId') healtInsuranceId){
        return this.healtInsuranceService.findOneHealtInsurance(healtInsuranceId);
    }
    @Post()
    createOneHealtInsurance(@Body() healtInsuranceInfo){
        return this.healtInsuranceService.createOneHealtInsurance(healtInsuranceInfo);
    }
    @Patch(':healtInsuranceId')
    updateOneHealtInsurance(@Param('healtInsuranceId') healtInsuranceId, @Body() healtInsuranceInfo){
        return this.healtInsuranceService.updateOneHealtInsurance(healtInsuranceId,healtInsuranceInfo);
    }
    @Delete(':healtInsuranceId')
    deleteOneHealtInsurance(@Param('healtInsuranceId') healtInsuranceId){
        return this.healtInsuranceService.deleteOneHealtInsurance(healtInsuranceId);
    }
}
