import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalShift, MedicalShiftSchema } from 'src/schema/medicalShift.schema';
import { MedicalShiftController } from './medical-shift.controller';
import { MedicalShiftService } from './medical-shift.service';

@Module({
    imports:[MongooseModule.forFeature([{name:MedicalShift.name,schema:MedicalShiftSchema}])],
    providers:[MedicalShiftService],
    controllers:[MedicalShiftController],
    exports:[MongooseModule]
})
export class MedicalShiftModule {}
