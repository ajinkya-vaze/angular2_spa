import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './userForm.component';

import { DirtyFormGuard } from '../dirtyFormGuard.service';

export const USERS_ROUTING = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: UserFormComponent, canDeactivate: [DirtyFormGuard] },
    { path: 'users/:id', component: UserFormComponent },
]);