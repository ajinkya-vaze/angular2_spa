import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './userForm.component';
import { NotFoundComponent } from './notFound.component';

import { DirtyFormGuard } from './dirtyFormGuard.service';

export const APP_ROUTING = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: UserFormComponent, canDeactivate: [DirtyFormGuard] },
    { path: 'users/:id', component: UserFormComponent},
    { path: '**', component: NotFoundComponent },
    { path: 'notFound', component: NotFoundComponent }
]);