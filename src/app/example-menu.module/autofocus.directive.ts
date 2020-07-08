import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit
} from '@angular/core';

@Directive({
    selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
    _autofocus;
    @Input() set appAutofocus(condition: boolean) {
        this._autofocus = condition !== false;
    }

    constructor(private _ref: ElementRef) {
    }

    ngAfterViewInit() {
        if (!this._autofocus && typeof this._autofocus !== 'undefined') {
            return;
        }

        this._ref.nativeElement.focus();
    }
}
