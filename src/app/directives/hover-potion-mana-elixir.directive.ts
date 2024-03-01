import { Directive, HostListener } from '@angular/core';
import { VendeurService } from '../services/vendeur.service';

@Directive({
  selector: '[appHoverPotionManaElixir]',
})
export class HoverPotionManaElixirDirective {
  @HostListener('mouseenter', ['$event']) private enter(e: MouseEvent) {
    this.vendeurService.setMessageSelected(
      'Cet élixir restaurera complètement votre magie'
    );
  }

  constructor(private vendeurService: VendeurService) {}
}
