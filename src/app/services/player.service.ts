import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private name?: string = 'Zyrass on Dyma';
  private race?: string = 'Développeur fou';
  private gold?: number = 123456 || 0;
  private lvl?: number = 69;

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
}
