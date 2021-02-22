import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Symptom, SymptomSchema } from 'src/schema/symptom.schema';
import { SymptomController } from './symptom.controller';
import { SymptomService } from './symptom.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Symptom.name, schema: SymptomSchema }])],
  controllers: [SymptomController],
  providers: [SymptomService],
  exports: [MongooseModule]
})
export class SymptomModule { }
