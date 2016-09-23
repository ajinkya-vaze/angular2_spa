import {Component} from '@angular/core';

import {Router} from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './app/navbar.component.html'
})
export class NavbarComponent {
    constructor(private _router: Router) {

    }

    isCurrentRoute(route:string): boolean {
        return this._router.isActive(route, true);
    }
}