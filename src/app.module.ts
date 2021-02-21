import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb+srv://smerlyn88:kQ5EO7qemmB8VtM6@cluster0.z3wbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
