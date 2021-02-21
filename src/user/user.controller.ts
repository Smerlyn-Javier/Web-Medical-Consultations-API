import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    @HttpCode(HttpStatus.OK)
    findAllUsers() {
        return this.userService.findAllUsers();
    }
    @Get(':userId')
    @HttpCode(HttpStatus.OK)
    findOneUsers(@Param('userId') userId: string) {
        return this.userService.findOneUser(userId);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createOneUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createOneUser(createUserDto);
    }
    @Patch(':userId')
    @HttpCode(HttpStatus.ACCEPTED)
    updateOneUser(@Param('userId') userId, @Body() userInfo:UpdateUserDto) {
        return this.userService.updateOneUser(userId,userInfo);
    }
    @Delete(':userId')
    @HttpCode(HttpStatus.OK)
    deleteOneUser(@Param('userId') userId: string) {
        return this.userService.deleteOneUser(userId);
    }
}
