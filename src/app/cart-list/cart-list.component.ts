import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { CartItemModel } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems : Array<CartItemModel>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = Math.random() < 0.5 ? this.cartService.getCart() : this.cartService.getEmptyCart()
  }

}
