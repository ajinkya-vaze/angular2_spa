import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './userForm.component';

import { SharedModule } from '../shared/shared.module';

import { UserService } from './user.service';

import { DirtyFormGuard } from '../dirtyFormGuard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        SharedModule
    ],
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    providers: [
        UserService,
        DirtyFormGuard
    ],
    exports: []
})
export class UsersModule {

}