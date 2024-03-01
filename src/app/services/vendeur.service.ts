import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendeurService {
  private message = {
    bienvenue: "Bonjour, vous avez besoin d'un article en particulier ?",
    sante: {
      petite: 'Cette petite potion restaurera un tout petit peu votre santé',
      grande: 'Cette grande potion restaurera la moitié de votre santé',
      elixir: 'Cet élixir restaurera complètement votre santé',
    },
    mana: {
      petite: 'Cette petite potion restaurera un tout petit peu votre magie',
      grande: 'Cette grande potion restaurera la moitié de votre magie',
      elixir: 'Cet élixir restaurera complètement votre magie',
    },
    aurevoir: 'Merci beaucoup, pour votre visite',
  };

  constructor() {}

  public getMessageBienvenue() {
    return this.message.bienvenue;
  }

  public getMessageSantePetite() {
    return this.message.sante.petite;
  }

  public getMessageSanteGrande() {
    return this.message.sante.grande;
  }

  public getMessageSanteElixir() {
    return this.message.sante.elixir;
  }

  public getMessageManaPetite() {
    return this.message.mana.petite;
  }

  public getMessageManaGrande() {
    return this.message.mana.grande;
  }

  public getMessageManaElixir() {
    return this.message.mana.elixir;
  }

  public getMessageAurevoir() {
    return this.message.aurevoir;
  }
}
