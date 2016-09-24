import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from './email.validator';
import { DirtyChecker } from './dirtyChecker';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: '/app/addUser.component.html'
})
export class AddUserComponent implements DirtyChecker {
    form: FormGroup;
    constructor(private _formBuilder: FormBuilder, 
    private _userService: UserService,
    private _router: Router) {
        let user = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([EmailValidator.validEmailId])],
            phone: ''
        });

        let address = this._formBuilder.group({
            street: '',
            suite: '',
            city: '',
            zipcode: ''
        })
        this.form = this._formBuilder.group({ user, address });
    }

    isDirty(): boolean {
        return this.form.dirty;
    }

    onSave() {
        console.log('Clicked on save');
        this._userService
        .createNewUser(this.form.value)
        .subscribe(
            null, 
            null, 
            () => {
                this._router.navigateByUrl('/users');
            }
        );
    }
}