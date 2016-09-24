import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    templateUrl: '/app/users.component.html'
})
export class UsersComponent implements OnInit {
    users: any[];
    isLoading: boolean = true;

    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        this._userService.getUsers().subscribe(
            response => {
                this.users = response.json();
            },
            null,
            () => {
                this.isLoading = false;
            });
    }
}