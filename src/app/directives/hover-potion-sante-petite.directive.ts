import { Directive, HostListener } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';

@Directive({
  selector: '[appHoverPotionSantePetite]',
})
export class HoverPotionSantePetiteDirective {
  @HostListener('mouseenter', ['$event']) private enter(e: MouseEvent) {
    this.vendeurService.setMessageSelected(
      'Cette petite potion restaurera un tout petit peu votre santé'
    );
  }

  constructor(private vendeurService: VendeurService) {}
}
