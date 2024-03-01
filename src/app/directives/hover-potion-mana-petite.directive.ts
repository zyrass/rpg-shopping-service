import { Directive, HostListener } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';

@Directive({
  selector: '[appHoverPotionManaPetite]',
})
export class HoverPotionManaPetiteDirective {
  @HostListener('mouseenter', ['$event']) private enter(e: MouseEvent) {
    this.vendeurService.setMessageSelected(
      'Cette petite potion restaurera un tout petit peu votre magie'
    );
  }

  constructor(private vendeurService: VendeurService) {}
}
