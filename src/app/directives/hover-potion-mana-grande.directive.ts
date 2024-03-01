import { Directive, HostListener } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';

@Directive({
  selector: '[appHoverPotionManaGrande]',
})
export class HoverPotionManaGrandeDirective {
  @HostListener('mouseenter', ['$event']) private enter(e: MouseEvent) {
    this.vendeurService.setMessageSelected(
      'Cette grande potion restaurera la moitié de votre magie'
    );
  }

  constructor(private vendeurService: VendeurService) {}
}
