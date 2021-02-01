import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItemModel } from '../../../core/services/cart.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() cartItem: CartItemModel;

  // не должен этот компонент менять данные
  // только отображать и извещать родителя о необходимімх изменениях
  constructor(private cartService: CartService) { }

  onIncrement(): void {
    this.cartService.increaseQuantity(this.cartItem);
  }

  onDecrement(): void {
    this.cartService.decreaseQuantity(this.cartItem);
  }

  onMouseWheel(event: any): void {
    if (event.deltaY > 0) {
      this.onIncrement();
    } else if (event.deltaY < 0) {
      this.onDecrement();
    }
  }

}
