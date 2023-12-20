import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {

    private fakeUsers =[{ username: "Adewale", email: 'afolabi@gmail.com'},
                        { username: "paul", email: 'paul@gmail.com'},
                        { username: "bolaji", email: 'bolaji @gmail.com'}];
    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType){

        this.fakeUsers.push(userDetails)
        return;
    }

    fetchUserById(id: number){
        return {id, username: 'adewale', email:'adewale@gmail.com'}
    }
}
