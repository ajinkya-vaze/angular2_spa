import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';

import { PostService } from './post.service';

@NgModule({
    imports: [
        CommonModule
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