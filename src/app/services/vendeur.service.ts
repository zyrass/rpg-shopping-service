import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendeurService {
  private messageSelected?: string;
  private price?: number = 0;

  constructor() {}

  public getMessageSelected() {
    return this.messageSelected;
  }

  public setMessageSelected(message: string) {
    console.log(this.messageSelected);
    this.messageSelected = message;
  }

  public getPrice() {
    return this.price;
  }

  public setPrice(price: number) {
    this.price = price;
  }
}
