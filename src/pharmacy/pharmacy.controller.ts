import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {

    constructor(private readonly pharmacyService:PharmacyService){}

    @Get()
    findAllPharmacy(){
        return this.pharmacyService.findAllPharmacy();
    }

    @Get(':pharmacyId')
    findOnePharmacy(@Param('pharmacyId') pharmacyId){
        return this.pharmacyService.findOnePharmacy(pharmacyId);
    }

    @Post()
    createOnePharmacy(@Body() pharmacyInfo){
        return this.pharmacyService.createOnePharmacy(pharmacyInfo);
    }

    @Patch(':pharmacyId')
    updateOnePharmacy(@Param('pharmacyId') pharmacyId, @Body() pharmacyInfo){
        return this.pharmacyService.updateOnePharmacy(pharmacyId,pharmacyInfo);
    }

    @Delete(':pharmacyId')
    deleteOnePharmacy(@Param('pharmacyId') pharmacyId){
        return this.pharmacyService.deleteOnePharmacy(pharmacyId);
    }
}
