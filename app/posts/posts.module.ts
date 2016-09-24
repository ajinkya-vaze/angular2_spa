import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';

import { PostService } from './post.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        PostsComponent
    ],
    providers: [
        PostService
    ],
    exports: []
})
export class PostsModule {

}