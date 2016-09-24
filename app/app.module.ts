import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './userForm.component';
import { NotFoundComponent } from './notFound.component';

import { APP_ROUTING } from './app.routing';
import { POSTS_ROUTING } from './posts/posts.routing';

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
        PostsModule,
        POSTS_ROUTING,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UsersComponent,
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