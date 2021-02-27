import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealtInsurance, HealtInsuranceSchema } from 'src/schema/healthInsurance.schema';
import { HealtInsuranceController } from './healt-insurance.controller';
import { HealtInsuranceService } from './healt-insurance.service';

@Module({
    imports:[MongooseModule.forFeature([{name:HealtInsurance.name,schema:HealtInsuranceSchema}])],
    providers:[HealtInsuranceService],
    controllers:[HealtInsuranceController],
    exports:[MongooseModule]
})
export class HealtInsuranceModule {}
