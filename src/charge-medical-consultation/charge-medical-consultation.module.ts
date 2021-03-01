import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChargeMedicalConsultation, ChargeMedicalConsultationSchema } from 'src/schema/chargeMedicalConsultation.schema';
import { ChargeMedicalConsultationController } from './charge-medical-consultation.controller';
import { ChargeMedicalConsultationService } from './charge-medical-consultation.service';

@Module({
    imports:[MongooseModule.forFeature([{name:ChargeMedicalConsultation.name,schema:ChargeMedicalConsultationSchema}])],
    providers:[ChargeMedicalConsultationService],
    controllers:[ChargeMedicalConsultationController],
    exports:[MongooseModule]
})
export class ChargeMedicalConsultationModule {}
