import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Module dependencies.
import { ExampleMenuComponent } from './example-menu.component';
import { MenuComponent } from './menu.component';
import { DropdownComponent } from './dropdown.component';
import { AutofocusDirective } from './autofocus.directive';

import { routes } from './example-menu.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],

    declarations: [
        ExampleMenuComponent,
        MenuComponent,
        DropdownComponent,
        AutofocusDirective
    ],

    exports: [
        RouterModule
    ]
})
export class ExampleMenuModule { }
