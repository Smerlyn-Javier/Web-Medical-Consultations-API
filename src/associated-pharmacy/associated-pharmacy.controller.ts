import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AssociatedPharmacyService } from './associated-pharmacy.service';

@Controller('associated-pharmacy')
export class AssociatedPharmacyController {

    constructor(private readonly associatedPharmacyService:AssociatedPharmacyService){}

    @Get()
    findAllAssociatedPharmacy(){
        return this.associatedPharmacyService.findAllAssociatedPharmacy();
    }

    @Get(':associatedPharmacyId')
    findOneAssociatedPharmacy(@Param('associatedPharmacyId') associatedPharmacyId){
        return this.associatedPharmacyService.findOneAssociatedPharmacy(associatedPharmacyId);
    }

    @Post()
    createOneAssociatedPharmacy(@Body() associatedPharmacyInfo){
        return this.associatedPharmacyService.createOneAssociatedPharmacy(associatedPharmacyInfo);
    }

    @Patch(':associatedPharmacyId')
    updateOneAssociatedPharmacy(@Param('associatedPharmacyId') associatedPharmacyId, @Body() associatedPharmacyInfo){
        return this.associatedPharmacyService.updateOneAssociatedPharmacy(associatedPharmacyId,associatedPharmacyInfo);
    }

    @Delete(':associatedPharmacyId')
    deleteOneAssociatedPharmacy(@Param('associatedPharmacyId') associatedPharmacyId){
        return this.associatedPharmacyService.deleteOneAssociatedPharmacy(associatedPharmacyId);
    }
}
