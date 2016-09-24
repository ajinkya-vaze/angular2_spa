import { Component } from '@angular/core';

import { PostService } from './post.service';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styleUrls: ['app/posts/posts.css']
})
export class PostsComponent {
    posts: any[];
    isLoading: boolean = true;
    selectedPost: any;

    constructor(private _postService: PostService) {
        this._postService.getPosts().subscribe(
            response => {
                this.posts = response.json();
            },
            null,
            () => { this.isLoading = false; }
        );
    }

    onPostClick(post) {
        this.selectedPost = post;
    }
}