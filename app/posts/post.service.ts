import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    static POSTS_SERVICE_URL = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {

    }

    getPosts() {
        return this._http.get(PostService.POSTS_SERVICE_URL);
    }

    getCommentsOnPost(id) {
        return this._http.get(PostService.POSTS_SERVICE_URL + "/" + id + "/comments");
    }

    // addNewUser(user) {
    //     return this._http.post(UserService.USER_SERVICE_URL, JSON.stringify(user));
    // }

    // updateUser(user) {
    //     return this._http.post(UserService.USER_SERVICE_URL, JSON.stringify(user));
    // }

    // getUserDetails(id) {
    //     return this._http.get(UserService.USER_SERVICE_URL + "/" + id);
    // }

    // deleteUser(id) {
    //     return this._http.delete(UserService.USER_SERVICE_URL + "/" + id);
    // }
}