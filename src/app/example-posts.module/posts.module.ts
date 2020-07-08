import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Module dependencies.
import { PostsComponent } from './posts.component';
import { PostsResolver } from './posts.resolver';

import { routes } from './posts.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],

    declarations: [
        PostsComponent
    ],

    exports: [
        RouterModule
    ],

    providers: [
        PostsResolver
    ]
})
export class PostsModule { }
