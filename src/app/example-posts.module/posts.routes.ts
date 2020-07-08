import { Routes } from '@angular/router';

// Module dependencies.
import { PostsComponent } from './posts.component';
import { PostsResolver } from './posts.resolver';

export const routes: Routes = [{
    path: '',
    component: PostsComponent,
    resolve: {
        posts: PostsResolver
    }
}];
