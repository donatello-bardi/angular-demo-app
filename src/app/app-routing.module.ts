import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Module dependencies.
const routes: Routes = [{
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full',
}, {
    path: 'text',
    loadChildren: () => import('./example-simple-text.module').then(({ SimpleTextModule }) => SimpleTextModule)
}, {
    path: 'menu',
    loadChildren: () => import('./example-menu.module').then(({ ExampleMenuModule }) => ExampleMenuModule)
}, {
    path: 'posts',
    loadChildren: () => import('./example-posts.module').then(({ PostsModule }) => PostsModule)
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule {}
