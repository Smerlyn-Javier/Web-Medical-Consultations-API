import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userSchemaDocument, User } from 'src/schema/user.schema';


@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel: Model<userSchemaDocument>) { }

    async findAllUsers() {
        return await this.UserModel.find();
    }
    async findOneUser(userId) {
        return await this.UserModel.findById(userId);
    }
    async createOneUser(userInfo) {
        return await this.UserModel.create(userInfo);
    }
    async updateOneUser(userId,userInfo) {
        return await this.UserModel.findByIdAndUpdate(userId,userInfo);
    }
    async deleteOneUser(userId) {
        return await this.UserModel.findByIdAndDelete(userId);
    }

}
