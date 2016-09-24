import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private _http: Http) {

    }

    getUsers() {
       return this._http.get("http://jsonplaceholder.typicode.com/users");
    }

    createNewUser(user:any) {
        return this._http.post("http://jsonplaceholder.typicode.com/users", user);
    }
}