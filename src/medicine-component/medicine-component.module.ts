import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicineComponent, MedicineComponentSchema } from 'src/schema/medicineComponent.schema';
import { MedicineComponentController } from './medicine-component.controller';
import { MedicineComponentService } from './medicine-component.service';

@Module({
    imports:[MongooseModule.forFeature([{name:MedicineComponent.name,schema:MedicineComponentSchema}])],
    providers:[MedicineComponentService],
    controllers:[MedicineComponentController],
    exports:[MongooseModule]
})
export class MedicineComponentModule {}
