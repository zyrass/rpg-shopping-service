import { Directive, HostListener } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';

@Directive({
  selector: '[appHoverPotionSanteGrande]',
})
export class HoverPotionSanteGrandeDirective {
  @HostListener('mouseenter', ['$event']) private enter(e: MouseEvent) {
    this.vendeurService.setMessageSelected(
      'Cette grande potion restaurera la moitié de votre santé'
    );
  }

  constructor(private vendeurService: VendeurService) {}
}
