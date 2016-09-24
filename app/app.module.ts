import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './userForm.component';
import { PostsComponent } from './posts.component';
import { NotFoundComponent } from './notFound.component';

import { APP_ROUTING } from './app.routing';

import { UserService } from './user.service';
import { DirtyFormGuard } from './dirtyFormGuard.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UsersComponent,
        PostsComponent,
        UserFormComponent,
        NotFoundComponent
    ],
    providers: [
        UserService,
        DirtyFormGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}