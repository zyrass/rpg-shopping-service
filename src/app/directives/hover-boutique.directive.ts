import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBoutique]',
})
export class HoverBoutiqueDirective {
  @HostListener('mouseenter', ['$event']) myEnterLi(e: MouseEvent) {}
  @HostBinding('appHoverBoutique') private el?: string;

  constructor() {}
}
