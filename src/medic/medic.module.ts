import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Medic, MedicSchema } from 'src/schema/medic.schema';
import { MedicController } from './medic.controller';
import { MedicService } from './medic.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Medic.name,schema:MedicSchema}])],
    providers:[MedicService],
    controllers:[MedicController],
    exports:[MongooseModule]

})
export class MedicModule {}
