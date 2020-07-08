// Angular dependencies.
import { Component } from '@angular/core';

@Component({
    templateUrl: './example-menu.component.html',
    styleUrls: ['./example-menu.component.scss']
})
export class ExampleMenuComponent {
    dd1 = 'bottom-start';
    dd2 = 'bottom-end';
    dd3 = 'top-start';
    dd4 = 'top-end';

    options: IDropdownOption[] = [{
        value: 'bottom-start',
        label: 'Bottom Start'
    }, {
        value: 'bottom-end',
        label: 'Bottom End'
    }, {
        value: 'top-end',
        label: 'Top End'
    }, {
        value: 'top-start',
        label: 'Top Start'
    }, {
        value: 'left-above',
        label: 'Left Above'
    }, {
        value: 'left-below',
        label: 'Left Below'
    }, {
        value: 'right-above',
        label: 'Right Above'
    }, {
        value: 'right-below',
        label: 'Right Below',
    }];

    constructor(
    ) {
    }
}
