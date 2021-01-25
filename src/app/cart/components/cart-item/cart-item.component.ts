import { Component, OnInit, Input } from '@angular/core';

import { CartItemModel } from '../../../core/services/cart.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() cartItem: CartItemModel;

  constructor(private cartService: CartService) { }

  onIncrement(): void {
    this.cartService.addProduct(this.cartItem);
  }

  onDecrement(): void {
    this.cartService.decreaseProduct(this.cartItem);
  }

  onRemove(): void {
    this.cartService.removeProduct(this.cartItem);
  }

  onMouseWheel(event: any): void {
    if (event.deltaY > 0) {
      this.onIncrement();
    } else if (event.deltaY < 0) {
      this.onDecrement();
    }
  }

}
