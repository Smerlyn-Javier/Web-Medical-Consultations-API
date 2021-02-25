import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose';

export type userSchemaDocument = User & Document;

@Schema()
export class User {
    @Prop()
    userName: string;

    @Prop()
    userPassword: string;

    @Prop()
    name: string;

    @Prop()
    lastName: string;

    @Prop()
    userEmail: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    gender: string;

    @Prop()
    age: string;

    @Prop()
    DateOfBirth: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
    roleId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
    statusId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);