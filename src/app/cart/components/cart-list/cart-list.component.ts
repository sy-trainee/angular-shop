import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';
import { CartItemModel } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems: Array<CartItemModel>;
  uniqSomething: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = Math.random() < 0.5 ? this.cartService.getCart() : this.cartService.getEmptyCart();
    this.uniqSomething = 0;
  }

  trackByName(index, cartItem: CartItemModel): string {
    return cartItem.name;
  }

  onBuyRandom(): void {
    const newItem = new CartItemModel();
    this.uniqSomething = this.uniqSomething + 1;
    newItem.name = 'Something ' + this.uniqSomething;
    newItem.count = 1;
    this.cartItems.push(newItem);
  }
}
