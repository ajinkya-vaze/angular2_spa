import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { UserService } from '../users/user.service';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styleUrls: ['app/posts/posts.css']
})
export class PostsComponent implements OnInit {
    posts: any[];
    postsLoading: boolean;
    selectedPost: any;
    selectedPostComments: any[];
    commentsLoading: boolean;
    users: any[];

    constructor(
        private _postService: PostService,
        private _userService: UserService) {        
    }

    ngOnInit() {
        this.loadUsers();
        this.loadPosts();
    }

    private loadUsers() {
        this._userService.getUsers().subscribe(
            response => {
                this.users = response.json();
            }
        );
    }

    private loadPosts(filter?) {
        this.postsLoading = true;

        this._postService.getPosts(filter).subscribe(
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

    reloadPosts(filter) {
        this.posts = [];
        this.loadPosts(filter);
    }
}