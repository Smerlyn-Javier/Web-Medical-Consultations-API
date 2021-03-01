import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicineComponentService } from './medicine-component.service';

@Controller('medicine-component')
export class MedicineComponentController {

    constructor(private readonly medicineComponentService:MedicineComponentService){}
      
    @Get()
    findAllMedicineComponent(){
        return this.medicineComponentService.findAllMedicineComponent();
    }

    @Get(':medicineComponentId')
    findOneMedicineComponent(@Param('medicineComponentId') medicineComponentId){
        return this.medicineComponentService.findOneMedicineComponent(medicineComponentId);
    }

    @Post()
    createOneMedicineComponent(@Body() medicineComponentInfo){
        return this.medicineComponentService.createOneMedicineComponent(medicineComponentInfo);
    }

    @Patch(':medicineComponentId')
    updateOneMedicineComponent(@Param('medicineComponentId') medicineComponentId, @Body() medicineComponentInfo){
        return this.medicineComponentService.updateOneMedicineComponent(medicineComponentId,medicineComponentInfo);
    }

    @Delete(':medicineComponentId')
    deleteOneMedicineComponent(@Param('medicineComponentId') medicineComponentId){
        return this.medicineComponentService.deleteOneMedicineComponent(medicineComponentId);
    }
}
