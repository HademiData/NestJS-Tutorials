import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Param,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
export class UsersController {
   
    constructor( private userService: UsersService){}
    // route parameters
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        const user = this.userService.fetchUserById(id);
        if (!user) 
            throw new HttpException('User not found', 400 );
        return user;
    }

    @Get()
    getUsers(){
        return this.userService.fetchUsers();
    }
 
    @Get('posts')
    getUsersPosts(){

        return   [{ username: 'wale',
             email: 'adewale@gmail.com',
             posts:[{
                id : 1,
                title :'post1',
             },
             {
                id : 2,
                title :'post2',
             }
             ]       
     
        }];
    }

    @Get('/posts/comments')
    getUserPostComments(){
        return[
            {
                id: 1,
                title: 'post 1',
                Comments: []

            },
        ]; 
    }

// Handling post requests and using data transferable objects
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto){
        console.log(userData);

        return this.userService.createUser(userData);
    
        
    }




    @Get(':id/:postId')
    getUserByPostId(@Param('postId') postId: string){
        console.log(postId);
        return {postId};
    }


    



}
