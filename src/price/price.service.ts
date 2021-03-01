import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Price, priceSchemaDocument } from 'src/schema/price.schema';
import {Model} from 'mongoose'

@Injectable()
export class PriceService {

    constructor(@InjectModel(Price.name) private priceModel:Model<priceSchemaDocument>){}

    findAllPrice() {
        return this.priceModel.find();
    }


    findOnePrice(priceId) {
        return this.priceModel.findById(priceId);
    }


    createOnePrice(priceInfo) {
        return this.priceModel.create(priceInfo);
    }


    updateOnePrice(priceId, priceInfo) {
        return this.priceModel.findByIdAndUpdate(priceId,priceInfo);
    }


    deleteOnePrice(priceId) {
        return this.priceModel.findByIdAndDelete(priceId);
    }
}
