import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    static USER_SERVICE_URL = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {

    }

    getUsers() {
        return this._http.get(UserService.USER_SERVICE_URL);
    }

    addNewUser(user) {
        return this._http.post(UserService.USER_SERVICE_URL, JSON.stringify(user));
    }
    
    updateUser(user) {
        return this._http.put(UserService.USER_SERVICE_URL, JSON.stringify(user));
    }

    getUserDetails(id) {
        return this._http.get(UserService.USER_SERVICE_URL + "/" + id);
    }
}