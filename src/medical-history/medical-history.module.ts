import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalHistory, MedicalHistorySchema } from 'src/schema/medicalHistory.schema';
import { MedicalHistoryController } from './medical-history.controller';
import { MedicalHistoryService } from './medical-history.service';

@Module({
    imports:[MongooseModule.forFeature([{name:MedicalHistory.name,schema:MedicalHistorySchema}])],
    providers:[MedicalHistoryService],
    controllers:[MedicalHistoryController],
    exports:[MongooseModule],
})
export class MedicalHistoryModule {}
