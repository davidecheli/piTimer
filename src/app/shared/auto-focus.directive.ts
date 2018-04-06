import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

    constructor(private element: ElementRef) {
        //this.element.nativeElement.focus();
    }

    ngAfterViewInit() {
        this.element.nativeElement.focus();
    }

}
