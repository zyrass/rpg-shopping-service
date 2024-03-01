import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBoutique]',
})
export class HoverBoutiqueDirective {
  @HostBinding('style.transition') public transition!: string;
  @HostBinding('style.backgroundColor') public bgColor?: string | null;

  @HostListener('mouseenter', ['$event']) private enterTR(e: MouseEvent) {
    this.bgColor = 'lightgray';
    this.transition = 'all 0.2s ease-in-out';
  }
  @HostListener('mouseleave', ['$event']) private leaveTR(e: MouseEvent) {
    this.bgColor = null;
  }

  constructor() {}
}
