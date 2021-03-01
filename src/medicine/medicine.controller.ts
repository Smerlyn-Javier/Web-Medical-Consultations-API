import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {

    constructor(private readonly medicineService:MedicineService){}

    @Get()
    findAllMedicine(){
        return this.medicineService.findAllMedicine();
    }

    @Get(':medicineId')
    findOneMedicine(@Param('medicineId') medicineId){
        return this.medicineService.findOneMedicine(medicineId);
    }

    @Post()
    createOneMedicine(@Body() medicineInfo){
        return this.medicineService.createOneMedicine(medicineInfo);
    }

    @Patch(':medicineId')
    updateOneMedicine(@Param('medicineId') medicineId, @Body() medicineInfo){
        return this.medicineService.updateOneMedicine(medicineId,medicineInfo);
    }

    @Delete(':medicineId')
    deleteOneMedicine(@Param('medicineId') medicineId){
        return this.medicineService.deleteOneMedicine(medicineId);
    }

}

