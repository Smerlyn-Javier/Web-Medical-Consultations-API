import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardInfo, CardInfoSchema } from 'src/schema/cardInfo.schema';
import { CardInfoController } from './card-info.controller';
import { CardInfoService } from './card-info.service';

@Module({
    imports:[MongooseModule.forFeature([{name:CardInfo.name,schema:CardInfoSchema}])],
    providers:[CardInfoService],
    controllers:[CardInfoController],
    exports:[MongooseModule],
})
export class CardInfoModule {}
