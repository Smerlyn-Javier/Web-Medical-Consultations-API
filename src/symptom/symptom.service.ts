import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Symptom, symptomSchemaDocument } from 'src/schema/symptom.schema';
import { Model } from 'mongoose'

@Injectable()
export class SymptomService {

    constructor(@InjectModel(Symptom.name) private symptomModel: Model<symptomSchemaDocument>) { }
    findAllSymtoms() {
        return this.symptomModel.find();
    }
    findOneSymtom(symptomId) {
        return this.symptomModel.findById(symptomId);
    }
    createOneSymtom(symptomInfo) {
        return this.symptomModel.create(symptomInfo);
    }
    updateOneSymtom(symptomId, symptomInfo) {
        return this.symptomModel.findByIdAndUpdate(symptomId, symptomInfo);
    }
    deleteOneSymtom(symptomId) {
        this.symptomModel.findByIdAndDelete(symptomId);
    }
}
