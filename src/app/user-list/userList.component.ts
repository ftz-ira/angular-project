import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
    selector: 'userList-component',
    templateUrl: './userList.component.html',
    styleUrls: ['./userList.component.scss']
})
export class UserlistComponent implements OnInit, OnDestroy {

    users: User[];
    userSubscription: Subscription;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userSubscription = this.userService.userSubject.subscribe(
            (users: User[]) => {
                this.users = users;
            }
        );
        this.userService.emitUsers();

    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}