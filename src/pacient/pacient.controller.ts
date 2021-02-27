import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PacientService } from './pacient.service';

@Controller('pacient')
export class PacientController {

    constructor(private readonly pacientService:PacientService){} 

    @Get()
    findAllPacient(){
        return this.pacientService.findAllPacient();
    }
    @Get(':pacientId')
    findOnePacient(@Param('pacientId') pacientId){
        return this.pacientService.findOnePacient(pacientId);
    }
    @Post()
    createOnePacient(@Body() pacientInfo){
        return this.pacientService.createOnePacient(pacientInfo);
    }
    @Patch(':pacientId')
    updateOnePacient(@Param('pacientId') pacientId, @Body() pacientInfo){
        return this.pacientService.updateOnePacient(pacientId,pacientInfo);
    }
    @Delete(':pacientId')
    deleteOnePacient(@Param('pacientId') pacientId){
        return this.pacientService.deleteOnePacient(pacientId);
    }
}
