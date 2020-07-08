// Angular dependencies
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class PostsResolver implements Resolve<IPost[]> {
    constructor(
        private _http: HttpClient
    ) {
    }

    resolve(): Promise<IPost[]> {
        return this._http.get(API_POSTS).pipe(map((list: IPost[]) => {
            return list.filter(({ title }) => {
                return ['d', 'l', 'f', 'i'].includes(title[0]);
            });
        })).toPromise();
    }
}
