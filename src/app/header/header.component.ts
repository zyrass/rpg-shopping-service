import { Component } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { PlayerInterface } from '../interfaces/PlayerInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public player: PlayerInterface = {
    pseudo: this.playerService.getName(),
    race: this.playerService.getRace(),
    gold: this.playerService.getGold(),
    lvl: this.playerService.getLvl(),
  };

  constructor(private playerService: PlayerService) {}
}
