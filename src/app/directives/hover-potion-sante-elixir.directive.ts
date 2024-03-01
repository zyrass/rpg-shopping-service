import { Directive, HostListener } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';

@Directive({
  selector: '[appHoverPotionSanteElixir]',
})
export class HoverPotionSanteElixirDirective {
  @HostListener('mouseenter', ['$event']) private enter(e: MouseEvent) {
    this.vendeurService.setMessageSelected(
      'Cet élixir restaurera complètement votre santé'
    );
  }

  constructor(private vendeurService: VendeurService) {}
}
