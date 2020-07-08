// Angular dependencies.
import {
    Component,
    Input,
    ElementRef,
    AfterViewInit
} from '@angular/core';

const BOTTOM_START = 'bottom-start';
const BOTTOM_END = 'bottom-end';
const TOP_END = 'top-end';
const TOP_START = 'top-start';
const LEFT_ABOVE = 'left-above';
const LEFT_BELOW = 'left-below';
const RIGHT_ABOVE = 'right-above';
const RIGHT_BELOW = 'right-below';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
    @Input() parent: HTMLElement;

    @Input() position: string;

    constructor(
        private _ref: ElementRef
    ) {
    }

    ngAfterViewInit() {
        const { top, left, position } = calcPosition(this.position, this.parent, this._ref.nativeElement);

        this._ref.nativeElement.classList.add(`--${ position }`);
        this._ref.nativeElement.style.top = top;
        this._ref.nativeElement.style.left = left;
    }
}

function calcPosition(position: string, hostRef: HTMLElement, childRef: HTMLElement) {
    const host = hostRef.getBoundingClientRect();
    const child = childRef.getBoundingClientRect();
    let top;
    let left;

    let i = 20;
    let _position;

    const body = document.body.getBoundingClientRect();

    if (body.height < child.height) {
        const offset = Math.min(host.top, body.height - host.bottom);

        child.height = body.height - offset;
        childRef.style.height = child.height + 'px';
        childRef.classList.add(`--overflow`);
    }

    while (i--) {
        _position = position;

        try {
            switch (position) {
                case BOTTOM_START:
                    top = host.top + host.height;
                    left = host.left;
                    position = BOTTOM_END;
                    break;
                case BOTTOM_END:
                    top = host.top + host.height;
                    left = host.left + host.width - child.width;
                    position = RIGHT_ABOVE;
                    break;
                case TOP_END:
                    top = host.top - child.height;
                    left = host.left + host.width - child.width;
                    position = BOTTOM_START;
                    break;
                case TOP_START:
                    top = host.top - child.height;
                    left = host.left;
                    position = TOP_END;
                    break;
                case LEFT_ABOVE:
                    top = host.bottom - child.height;
                    left = host.left - child.width;
                    position = LEFT_BELOW;
                    break;
                case LEFT_BELOW:
                    top = host.top;
                    left = host.left - child.width;
                    position = TOP_START;
                    break;
                case RIGHT_ABOVE:
                    top = host.bottom - child.height;
                    left = host.left + host.width;
                    position = RIGHT_BELOW;
                    break;
                case RIGHT_BELOW:
                    top = host.top;
                    left = host.left + host.width;
                    position = LEFT_ABOVE;
                    break;
            }

            validatePosition(top, left, child.width, child.height);

            break;
        } catch (err) {
            // Noop.
        }
    }

    return { top: `${ top }px`, left: `${ left }px`, position: _position };
}

function validatePosition(top: number, left: number, width: number, height: number) {
    const body = document.body.getBoundingClientRect();

    if (body.top > top || left < 0 || body.width < (left + width)) {
        throw new Error('Err');
    }

    if (body.bottom < (top + height)) {
        throw new Error('Err');
    }
}
