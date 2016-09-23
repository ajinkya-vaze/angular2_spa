import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';

import {APP_ROUTING} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        UsersComponent,
        PostsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}