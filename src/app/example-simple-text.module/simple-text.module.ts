import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Module dependencies.
import { SimpleTextComponent } from './simple-text.component';
import { XCodeComponent } from './x-code.component';

import { routes } from './simple-text.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],

    declarations: [
        XCodeComponent,
        SimpleTextComponent
    ],

    exports: [
        RouterModule
    ],

    providers: []
})
export class SimpleTextModule { }
