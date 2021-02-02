import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective {

  @Input('appBorder') private size: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onMouseEnter(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.size + ' double black');
  }
}
