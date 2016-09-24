import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { EmailValidator } from '../email.validator';
import { DirtyChecker } from '../dirtyChecker';

import { UserService } from './user.service';

import { User } from './user';

@Component({
    templateUrl: '/app/users/userForm.component.html'
})
export class UserFormComponent implements DirtyChecker, OnInit {
    form: FormGroup;
    title: string;
    user: User = new User();

    constructor(private _formBuilder: FormBuilder,
        private _userService: UserService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {

        let address = this._formBuilder.group({
            street: '',
            suite: '',
            city: '',
            zipcode: ''
        })
        this.form = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([EmailValidator.validEmailId])],
            phone: '',
            address
        });
    }

    ngOnInit() {
        this._activatedRoute.params.subscribe(params => {
            var id = +params["id"];

            this.title = id ? "Edit User" : "New User";

            if (!id)
                return;

            this._userService.getUserDetails(id)
                .subscribe(
                (user) => {
                    this.user = user.json();
                },
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });
    }

    isDirty(): boolean {
        return this.form.dirty;
    }

    onSave() {
        let result;

        if (!this.user.id) {
            result = this._userService.addNewUser(this.user);
        }
        else {
            result = this._userService.updateUser(this.user);
        }

        result.subscribe(
            null,
            null,
            () => {
                //Reset values on form so that it is marked a pristine
                this.form.reset();
                this._router.navigateByUrl('/users');
            }
        );
    }
}