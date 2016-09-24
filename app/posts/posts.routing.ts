import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

export const POSTS_ROUTING = RouterModule.forChild([
    { path: 'posts', component: PostsComponent }
]);