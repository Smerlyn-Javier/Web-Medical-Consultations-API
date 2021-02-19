import {IsString,IsEmail,IsMongoId} from 'class-validator'

export class CreateUserDto {
   @IsString()
    userName:string;

   @IsString()
    userPassword:string;

   @IsEmail()
    userEmail:string;

   @IsMongoId()
    roleId:object;

   @IsMongoId()
    statusId:object;
}