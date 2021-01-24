import { Injectable } from '@angular/core';

export class CartItemModel {
  name: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public myCartItems: Array<CartItemModel> = [
    {name: 'Watch', count: 1},
  ];

  getCart(): Array<CartItemModel> {
    return this.myCartItems;
  }

  getEmptyCart(): Array<CartItemModel> {
    return [];
  }

}
// линтер
