import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Medicine, MedicineSchema } from 'src/schema/medicine.schema';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Medicine.name,schema:MedicineSchema}])],
    providers:[MedicineService],
    controllers:[MedicineController],
    exports:[MongooseModule]
})
export class MedicineModule {}
