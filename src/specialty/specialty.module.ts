import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Specialty, SpecialtySchema } from 'src/schema/specialty.schema';
import { SpecialtyController } from './specialty.controller';
import { SpecialtyService } from './specialty.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Specialty.name,schema:SpecialtySchema}])],
    providers:[SpecialtyService],
    controllers:[SpecialtyController],
    exports:[MongooseModule]
})
export class SpecialtyModule {}
