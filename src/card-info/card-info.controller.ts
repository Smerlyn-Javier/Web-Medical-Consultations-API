import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CardInfoService } from './card-info.service';

@Controller('card-info')
export class CardInfoController {

    constructor(private readonly cardInfoService:CardInfoService){}

    @Get()
    findAllCardInfo(){
        return this.cardInfoService.findAllCardInfo();
    }

    @Get(':cardInfoId')
    findOneCardInfo(@Param('cardInfoId') cardInfoId){
        return this.cardInfoService.findOneCardInfo(cardInfoId);
    }

    @Post()
    createOneCardInfo(@Body() cardInfoInfo){
        return this.cardInfoService.createOneCardInfo(cardInfoInfo);
    }

    @Patch(':cardInfoId')
    updateOneCardInfo(@Param('cardInfoId') cardInfoId, @Body() cardInfoInfo){
        return this.cardInfoService.updateOneCardInfo(cardInfoId,cardInfoInfo);
    }

    @Delete(':cardInfoId')
    deleteOneCardInfo(@Param('cardInfoId') cardInfoId){
        return this.cardInfoService.deleteOneCardInfo(cardInfoId);
    }
}
