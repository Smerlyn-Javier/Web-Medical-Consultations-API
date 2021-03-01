import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CardInfo, cardInfoSchemaDocument } from 'src/schema/cardInfo.schema';
import {Model} from 'mongoose'

@Injectable()
export class CardInfoService {

    constructor(@InjectModel(CardInfo.name) private cardInfoModel:Model<cardInfoSchemaDocument>){}

    findAllCardInfo(){
        return this.cardInfoModel.find();
    }

    findOneCardInfo(cardInfoId){
        return this.cardInfoModel.findById(cardInfoId);
    }


    createOneCardInfo(cardInfoInfo){
        return this.cardInfoModel.create(cardInfoInfo);
    }

    updateOneCardInfo(cardInfoId,cardInfoInfo){
        return this.cardInfoModel.findByIdAndUpdate(cardInfoId,cardInfoInfo);
    }

    deleteOneCardInfo(cardInfoId){
        return this.cardInfoModel.findByIdAndDelete(cardInfoId);
    }
}
