import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notFound.component';

import { APP_ROUTING } from './app.routing';
import { POSTS_ROUTING } from './posts/posts.routing';
import { USERS_ROUTING } from './users/users.routing';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        PostsModule,
        UsersModule,
        POSTS_ROUTING,
        USERS_ROUTING,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        NotFoundComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}