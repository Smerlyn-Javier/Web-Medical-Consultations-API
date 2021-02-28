import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import{Pharmacy,PharmacySchema} from '../schema/pharmacy.schema'
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Pharmacy.name,schema:PharmacySchema}])],
    providers:[PharmacyService],
    controllers:[PharmacyController],
    exports:[MongooseModule]
})
export class PharmacyModule {}
