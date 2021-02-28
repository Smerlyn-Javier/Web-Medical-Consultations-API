import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, ScheduleSchema } from 'src/schema/schedule.schema';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
    imports:[MongooseModule.forFeature([{name:Schedule.name,schema:ScheduleSchema}])],
    providers:[ScheduleService],
    controllers:[ScheduleController],
    exports:[MongooseModule]
})
export class ScheduleModule {}
