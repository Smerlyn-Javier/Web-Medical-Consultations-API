import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
    constructor(private readonly statusService:StatusService){}
    @Get()
    findAllStatus(){
        return this.statusService.findAllStatus();
    }
    @Get(':statusId')
    findOneStatus(@Param('statusId') statusId){
        return this.statusService.findOneStatus(statusId);
    }
    @Post()
    createOneStatus(@Body() statusInfo){
        return this.statusService.createOneStatus(statusInfo);
    }
    @Patch(':statusId')
    updateOneStatus(@Param('statusId') statusId, @Body() statusInfo){
        return this.statusService.updateOneStatus(statusId,statusInfo);
    }
    @Delete(':statusId')
    deleteOneStatus(@Param('statusId') statusId){
        return this.statusService.deleteOneStatus(statusId);
    }
}
