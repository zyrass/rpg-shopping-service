import { PlayerService } from './../../../services/player.service';
import { Component, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
})
export class ShoppingComponent {
  public inventory? = { ...this.playerService.getInventory()!.potions };

  public counter?: number = 0;

  constructor(public playerService: PlayerService) {}

  public ajouterPotion(type: string, force: string) {
    if (type === 'sante') {
      switch (force) {
        case 'petite':
          this.playerService.addPetitePotionSante();
          this.counter! += 100;
          break;

        case 'grande':
          this.playerService.addGrandePotionSante();
          this.counter! += 500;
          break;

        case 'elixir':
          this.playerService.addElixirSante();
          this.counter! += 1000;
          break;
      }
    } else if (type === 'mana') {
      switch (force) {
        case 'petite':
          this.playerService.addPetitePotionMana();
          this.counter! += 250;
          break;

        case 'grande':
          this.playerService.addGrandePotionMana();
          this.counter! += 1000;
          break;

        case 'elixir':
          this.playerService.addElixirMana();
          this.counter! += 2000;
          break;
      }
    }
  }
}
