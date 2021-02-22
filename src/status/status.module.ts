import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Status, StatusSchema } from 'src/schema/status.schema';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Status.name,schema:StatusSchema}])],
    controllers:[StatusController],
    providers:[StatusService],
    exports:[MongooseModule],
})
export class StatusModule {}
