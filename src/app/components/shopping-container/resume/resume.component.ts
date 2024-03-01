import { PlayerService } from './../../../services/player.service';
import { VendeurService } from './../../../services/vendeur.service';
import {
  Component,
  Injectable,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit {
  public desactivatedBTN?: boolean = this.playerService.getGold()! <= 99;
  public inventory = { ...this.playerService.getInventory()?.potions };

  public price = this.vendeurService.getPrice();
  public message = this.vendeurService.getMessageSelected();

  constructor(
    private vendeurService: VendeurService,
    private playerService: PlayerService
  ) {
    console.log(this.vendeurService.getMessageSelected());
  }

  ngOnInit(): void {
    this.message = "Bonjour, vous avez besoin d'un article en particulier ?";
  }
}
