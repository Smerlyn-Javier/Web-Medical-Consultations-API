import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
 
    constructor (private readonly roleService:RoleService){}
    @Get()
    findAllRole(){
        return this.roleService.findAllRole();
    }
    @Get(':roleId')
    findOneRole(@Param('roleId') roleId){
        return this.roleService.findOneRole(roleId);
    }
    @Post()
    createOneRole(@Body() roleInfo){
        return this.roleService.createOneRole(roleInfo);
    }
    @Patch(':roleId')
    updateOneRole(@Param('roleId') roleId,@Body() roleInfo){
      return this.roleService.updateOneRole(roleId,roleInfo);
    }
    @Delete(':roleId')
    deleteOneRole(@Param('roleId') roleId){
        return this.roleService.deleteOneRole(roleId);
    }

}
