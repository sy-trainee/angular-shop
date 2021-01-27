import { Input, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('appHighlight') color: string;

    constructor(private el: ElementRef, private render: Renderer2) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.setBackgrounfColor(this.color);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.setBackgrounfColor(null);
    }

    private setBackgrounfColor(color: string): void {
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
