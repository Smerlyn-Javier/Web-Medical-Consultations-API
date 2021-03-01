import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {

    constructor(private readonly priceService:PriceService){}

    @Get()
    findAllPrice(){
        return this.priceService.findAllPrice();
    }

    @Get(':priceId')
    findOnePrice(@Param('priceId') priceId){
        return this.priceService.findOnePrice(priceId);
    }

    @Post()
    createOnePrice(@Body() priceInfo){
        return this.priceService.createOnePrice(priceInfo);
    }

    @Patch(':priceId')
    updateOnePrice(@Param('priceId') priceId, @Body() priceInfo){
        return this.priceService.updateOnePrice(priceId,priceInfo);
    }

    @Delete(':priceId')
    deleteOnePrice(@Param('priceId') priceId){
        return this.priceService.deleteOnePrice(priceId);
    }
}
