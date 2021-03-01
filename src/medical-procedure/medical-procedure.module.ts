import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalProcedure, MedicalProcedureSchema } from 'src/schema/medicalProcedure.schema';
import { MedicalProcedureController } from './medical-procedure.controller';
import { MedicalProcedureService } from './medical-procedure.service';

@Module({
    imports:[MongooseModule.forFeature([{name:MedicalProcedure.name,schema:MedicalProcedureSchema}])],
    providers:[MedicalProcedureService],
    controllers:[MedicalProcedureController],
    exports:[MongooseModule]
})
export class MedicalProcedureModule {}
