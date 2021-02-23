import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Symptom, symptomSchemaDocument } from 'src/schema/symptom.schema';
import { Model } from 'mongoose'

@Injectable()
export class SymptomService {

    constructor(@InjectModel(Symptom.name) private symptomModel: Model<symptomSchemaDocument>) { }
    async findAllSymtoms() {
        return await this.symptomModel.find();
    }
    async findOneSymtom(symptomId) {
        return await this.symptomModel.findById(symptomId);
    }
    async createOneSymtom(symptomInfo) {
        return await this.symptomModel.create(symptomInfo);
    }
    async updateOneSymtom(symptomId, symptomInfo) {
        return await this.symptomModel.findByIdAndUpdate(symptomId, symptomInfo);
    }
    async deleteOneSymtom(symptomId) {
        return await this.symptomModel.findByIdAndDelete(symptomId);
    }
}
