import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SymptomService } from './symptom.service';

@Controller('symptom')
export class SymptomController {
 
    constructor(private readonly symptomService:SymptomService){}
    @Get()
    findAllSymtoms(){
        return this.symptomService.findAllSymtoms();
    }
    @Get(':symptomId')
    findOneSymtom(@Param('symptomId') symptomId){
        return this.symptomService.findOneSymtom(symptomId);
    }
    @Post()
    createOneSymtom(@Body() symptomInfo){
        return this.symptomService.createOneSymtom(symptomInfo);
    }
    @Patch(':symptomId')
    updateOneSymtom(@Param('symptomId') symptomId, @Body() symptomInfo){
        return this.symptomService.updateOneSymtom(symptomId,symptomInfo);
    }
    @Delete(':symptomId')
    deleteOneSymtom(@Param('symptomId') symptomId){
        return this.symptomService.deleteOneSymtom(symptomId);
    }
}
