import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './addUser.component';
import { PostsComponent } from './posts.component';
import { DirtyFormGuard } from './dirtyFormGuard.service';

export const APP_ROUTING = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: AddUserComponent, canDeactivate: [DirtyFormGuard] },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: HomeComponent }
]);