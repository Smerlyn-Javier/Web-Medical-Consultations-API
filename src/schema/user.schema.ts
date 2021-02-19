import {Schema,Prop,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type userSchemaDocument = userSchema & Document;

@Schema()
export class userSchema {
    @Prop()
    userName:string;

   @Prop()
    userPassword:string;

   @Prop()
    userEmail:string;

   @Prop()
    roleId:object;

   @Prop()
    statusId:object;
}

export const UserSchema = SchemaFactory.createForClass(userSchema);