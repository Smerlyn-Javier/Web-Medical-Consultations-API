import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document} from 'mongoose'

export type roleSchemaDocument = Role & Document;

@Schema()
export class Role {
    @Prop()
    role: string;
    @Prop()
    roleDescription: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);