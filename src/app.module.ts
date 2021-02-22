import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';
import { StatusModule } from './status/status.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://smerlyn88:kQ5EO7qemmB8VtM6@cluster0.z3wbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    UserModule,
    RoleModule,
    StatusModule,
  ],
  controllers: [AppController, UserController, RoleController, StatusController],
  providers: [AppService, UserService, RoleService, StatusService],
})
export class AppModule { }
