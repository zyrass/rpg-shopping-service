import { PlayerService } from './../../../services/player.service';
import { VendeurService } from './../../../services/vendeur.service';
import { Component, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  public desactivatedBTN?: boolean = this.playerService.getGold()! <= 99;

  public inventory = { ...this.playerService.getInventory()?.potions };

  public message = {
    bienvenue: this.vendeurService.getMessageBienvenue(),
    sante: {
      petite: this.vendeurService.getMessageSantePetite(),
      grande: this.vendeurService.getMessageSanteGrande(),
      elixir: this.vendeurService.getMessageSanteElixir(),
    },
    mana: {
      petite: this.vendeurService.getMessageManaPetite(),
      grande: this.vendeurService.getMessageManaGrande(),
      elixir: this.vendeurService.getMessageManaElixir(),
    },
    aurevoir: this.vendeurService.getMessageAurevoir(),
  };

  constructor(
    private vendeurService: VendeurService,
    private playerService: PlayerService
  ) {}
}
