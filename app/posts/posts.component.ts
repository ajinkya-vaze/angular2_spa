import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { UserService } from '../users/user.service';

import * as _ from 'underscore';

@Component({
    templateUrl: 'app/posts/posts.component.html',
    styleUrls: ['app/posts/posts.css']
})
export class PostsComponent implements OnInit {
    posts: any[];
    pagedPosts: any[];
    postsLoading: boolean;
    selectedPost: any;
    selectedPostComments: any[];
    commentsLoading: boolean;
    users: any[];
    pageSize = 10;

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
                this.pagedPosts = _.take(this.posts, this.pageSize);
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
        this.pagedPosts = [];
        this.loadPosts(filter);
    }

    onPageChange(page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }
}