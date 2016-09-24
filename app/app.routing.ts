import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notFound.component';

import { DirtyFormGuard } from './dirtyFormGuard.service';

export const APP_ROUTING = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
    { path: 'notFound', component: NotFoundComponent }
]);