import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private name?: string = 'Zyrass on Dyma';
  private race?: string = 'Développeur fou';
  private gold?: number = 99 || 0;
  private lvl?: number = 69;
  private inventory? = {
    potions: {
      quantity: {
        sante: {
          petite: 0,
          grande: 0,
          elixir: 0,
        },
        mana: {
          petite: 0,
          grande: 0,
          elixir: 0,
        },
      },
    },
  };

  constructor() {
    this.name = this.getName();
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getRace() {
    return this.race;
  }

  public setRace(race: string) {
    this.race = race;
  }

  public getGold() {
    return this.gold;
  }

  public setGold(gold: number) {
    this.gold = gold;
  }

  public getLvl() {
    return this.lvl;
  }

  public setLvl(lvl: number) {
    this.lvl = lvl;
  }

  public getInventory() {
    return this.inventory;
  }

  public addPetitePotionSante() {
    console.log(
      'petite potion de santé',
      this.inventory!.potions.quantity.sante.petite
    );
    this.inventory!.potions.quantity.sante.petite++;
  }
  public addGrandePotionSante() {
    console.log(
      'grande potion de santé',
      this.inventory!.potions.quantity.sante.grande
    );
    this.inventory!.potions.quantity.sante.grande++;
  }
  public addElixirSante() {
    console.log(
      'elixir de santé',
      this.inventory!.potions.quantity.sante.elixir
    );
    this.inventory!.potions.quantity.sante.elixir++;
  }

  public addPetitePotionMana() {
    console.log(
      'petite potion de mnna',
      this.inventory!.potions.quantity.mana.petite
    );
    this.inventory!.potions.quantity.mana.petite++;
  }
  public addGrandePotionMana() {
    console.log(
      'grande potion de mana',
      this.inventory!.potions.quantity.mana.grande
    );
    this.inventory!.potions.quantity.mana.grande++;
  }
  public addElixirMana() {
    console.log('elixir de mana', this.inventory!.potions.quantity.mana.elixir);
    this.inventory!.potions.quantity.mana.elixir++;
  }
}
