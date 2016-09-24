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

    deleteUser(user) {
        if (confirm("Are you sure you want to delte " + user.name + "?")) {
            //We are taking optimistic delete approach
            //so delete uesr from list first
            let index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this._userService.deleteUser(user.id).subscribe(
                null,
                error => {
                    alert("Could not delete selected user");
                    //Add deleted user back
                    this.users.splice(index, 0, user);
                }
            );
        }
    }
}