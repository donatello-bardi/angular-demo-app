// Angular dependencies.
import {
    Component,
    Input,
    Output,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener
} from '@angular/core';
import {
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const uid = () => Math.random().toString(16).substring(2);

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DropdownComponent),
        multi: true
    }]
})
export class DropdownComponent {
    public id = uid();

    @HostBinding('class.--loading') _loading = false;
    @HostBinding('attr.disabled') disabled = false;

    @Input() set loading(loading: boolean) {
        this._loading = loading;
        this.disabled = loading;
    }
    get isLoading() {
        return this._loading;
    }

    @Input() menuPosition = 'bottom-start';

    @Input() options: IDropdownOption[] = [];

    _valueSbj: BehaviorSubject<string> = new BehaviorSubject(null);
    value$ = this._valueSbj.asObservable();
    @Input() set value(value: string) {
        this._valueSbj.next(value);
    }
    label$ = this.value$.pipe(map((value) => {
        return this.options.find(({ value: _ }) => _ === value).label;
    }));

    @Output() changeValue: EventEmitter<string> = new EventEmitter();

    _ignore = false;
    _open = false;
    get isOpen(): boolean {
        return this._open;
    }

    @HostListener('window:resize', [])
    _resize() {
        if (!this.isOpen) {
            return;
        }

        this.onClose();
    }
    @HostListener('window:scroll', [])
    _scroll() {
        if (!this.isOpen) {
            return;
        }

        this.onClose();
    }
    @HostListener('document:click', [])
    _click() {
        if (this._ignore) {
            this._ignore = false;
            return;
        }

        if (!this.isOpen) {
            return;
        }

        this.onClose();
    }

    constructor(
    ) {
    }

    onChange(value: string) {
        this.value = value;

        this.changeValue.emit(value);
        this.propagateChange(value);
    }

    onToggleView() {
        if (this._open) {
            this.onClose();
        } else {
            this.onOpen();
        }
    }

    onOpen() {
        this._open = true;
        this._ignore = true;
    }

    onClose() {
        this._open = false;
    }

    // START: ControlValueAccessor Interface
    writeValue(value: string) {
        this.value = value;
    }

    propagateChange = (_: string) => {
    }

    registerOnChange(fn: () => string) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }
    // END: ControlValueAccessor Interface
}
