import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Price, PriceSchema } from 'src/schema/price.schema';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Price.name,schema:PriceSchema}])],
    providers:[PriceService],
    controllers:[PriceController],
    exports:[MongooseModule]
})
export class PriceModule {}
