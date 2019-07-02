import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private users: User[] =[
        new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
    ];
    
    userSubject = new Subject<User[]>();

    constructor() { }

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }

}