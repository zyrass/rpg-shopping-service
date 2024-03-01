import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private name?: string;
  private race?: string;
  private gold?: number;

  constructor() {}

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
}
