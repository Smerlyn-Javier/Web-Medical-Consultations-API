import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('pacient')
export class PacientController {

    @Get()
    findAllPacient(){
        return ''
    }
    @Get(':pacientId')
    findOnePacient(@Param('pacientId') pacientId){
        return ''
    }
    @Post()
    createOnePacient(@Body() pacientInfo){
        return ''
    }
    @Patch(':pacientId')
    updateOnePacient(@Param('pacientId') pacientId, @Body() pacientInfo){
        return ''
    }
    @Delete(':pacientId')
    deleteOnePacient(@Param('pacientId') pacientId){
        return ''
    }
}
