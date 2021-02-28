import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorOffice, DoctorOfficeSchema } from 'src/schema/doctorOffice.schema';
import { DoctorOfficeController } from './doctor-office.controller';
import { DoctorOfficeService } from './doctor-office.service';

@Module({
    imports:[MongooseModule.forFeature([{name:DoctorOffice.name,schema:DoctorOfficeSchema}])],
    providers:[DoctorOfficeService],
    controllers:[DoctorOfficeController],
    exports:[MongooseModule]
})
export class DoctorOfficeModule {}
