import { Injectable } from '@nestjs/common';

@Injectable()
export class PacientService {


    findAllPacient(){
        return ''
    }

    findOnePacient(@Param('pacientId') pacientId){
        return ''
    }

    createOnePacient(pacientInfo){
        return ''
    }

    updateOnePacient( pacientId,  pacientInfo){
        return ''
    }

    deleteOnePacient(pacientId){
        return ''
    }
}
