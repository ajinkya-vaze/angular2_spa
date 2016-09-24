import { Component } from '@angular/core';

import { PostService } from './post.service';

@Component({
    template: `
    <div class="col-md-6">
    <h1>Posts</h1>
    <spinner [visible]="isLoading"></spinner>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let post of posts">
            {{ post.title }}
            </li>
        </ul>
    </div>
    `
})
export class PostsComponent {
    posts: any[];
    isLoading: boolean = true;
    constructor(private _postService: PostService) {
        this._postService.getPosts().subscribe(
            response => {
                this.posts = response.json();
            },
            null,
            () => { this.isLoading = false; }
        );
    }
}