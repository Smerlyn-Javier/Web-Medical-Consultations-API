import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pacient, PacientSchema } from 'src/schema/pacient.schema';
import { PacientController } from './pacient.controller';
import { PacientService } from './pacient.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Pacient.name, schema: PacientSchema }])],
    controllers: [PacientController],
    providers: [PacientService],
    exports: [MongooseModule]
})
export class PacientModule { }
