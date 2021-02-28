import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';

@Controller('specialty')
export class SpecialtyController {

    constructor(private readonly specialtyService:SpecialtyService){}

    @Get()
    findAllSpecialty(){
        return this.specialtyService.findAllSpecialty();
    }

    @Get(':specialtyId')
    findOneSpecialty(@Param('specialtyId') specialtyId){
        return this.specialtyService.findOneSpecialty(specialtyId);
    }

    @Post()
    createOneSpecialty(@Body() specialtyInfo){
        return this.specialtyService.createOneSpecialty(specialtyInfo);
    }

    @Patch(':specialtyId')
    updateOneSpecialty(@Param('specialtyId') specialtyId, @Body() specialtyInfo){
        return this.specialtyService.updateOneSpecialty(specialtyId,specialtyInfo);
    }

    @Delete(':specialtyId')
    deleteOneSpecialty(@Param('specialtyId') specialtyId){
        return this.specialtyService.deleteOneSpecialty(specialtyId);
    }
}
