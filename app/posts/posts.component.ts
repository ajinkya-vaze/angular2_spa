import { Component } from '@angular/core';

import { PostService } from './post.service';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styleUrls: ['app/posts/posts.css']
})
export class PostsComponent {
    posts: any[];
    postsLoading: boolean = true;
    selectedPost: any;
    selectedPostComments: any[];
    commentsLoading: boolean;

    constructor(private _postService: PostService) {
        this._postService.getPosts().subscribe(
            response => {
                this.posts = response.json();
            },
            null,
            () => { this.postsLoading = false; }
        );
    }

    onPostClick(post) {
        this.selectedPost = post;
        this.selectedPostComments = [];
        this.commentsLoading = true;
        this._postService.getCommentsOnPost(post.id)
            .subscribe(
            response => {
                this.selectedPostComments = response.json();
            },
            null,
            () => { this.commentsLoading = false }
            );
    }
}