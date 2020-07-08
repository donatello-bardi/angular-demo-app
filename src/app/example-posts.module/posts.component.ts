// Angular dependencies.
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
    posts: IPost[] = [];

    constructor(
        private _route: ActivatedRoute,
    ) {
        this.posts = this._route.snapshot.data.posts;
    }
}
