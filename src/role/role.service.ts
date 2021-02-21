import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Role, roleSchemaDocument } from 'src/schema/role.schema';

@Injectable()
export class RoleService {
    constructor(@InjectModel(Role.name) private RoleModel: Model<roleSchemaDocument>) { }

    async findAllRole() {
        return await this.RoleModel.find();
    }
    async findOneRole(roleId) {
        return await this.RoleModel.findById(roleId);
    }
    async createOneRole(roleInfo) {
        return await this.RoleModel.create(roleInfo);
    }
    async updateOneRole(roleId, roleInfo) {
        return await this.RoleModel.findByIdAndUpdate(roleId, roleInfo);
    }
    async deleteOneRole(roleId) {
        return await this.RoleModel.findByIdAndDelete(roleId);
    }
}
