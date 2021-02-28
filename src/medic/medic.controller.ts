import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicService } from './medic.service';

@Controller('medic')
export class MedicController {
 
    constructor(private readonly medicService:MedicService){}

    @Get()
    findAllMedic(){
        return this.medicService.findAllMedic();
    }
    @Get(':medicId')
    findOneMedic(@Param('medicId') medicId){
        return this.medicService.findOneMedic(medicId);
    }
    @Post()
    createOneMedic(@Body() medicInfo){
        return this.medicService.createOneMedic(medicInfo);
    }
    @Patch(':medicId')
    updateOneMedic(@Param('medicId') medicId, @Body() medicInfo){
        return this.medicService.updateOneMedic(medicId,medicInfo);
    }
    @Delete(':medicId')
    deleteOneMedic(@Param('medicId') medicId){
        return this.medicService.deleteOneMedic(medicId);
    }
}
