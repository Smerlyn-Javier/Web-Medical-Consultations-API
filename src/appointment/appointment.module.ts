import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from 'src/schema/appointment.schema';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';

@Module({
  imports:[MongooseModule.forFeature([{name:Appointment.name,schema:AppointmentSchema}])],
  controllers: [AppointmentController],
  providers:[AppointmentService],
  exports:[MongooseModule]
})
export class AppointmentModule {}
