import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { CartItemModel, CartService } from 'src/app/core/services/cart.service';
import { OrderModel, OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public order: OrderModel;

  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.order = new OrderModel();
    this.order.items = this.cartService.getProducts();
  }

  getOrderItems(): Array<CartItemModel> {
    return this.order.items;
  }

  onOrder(): void {
    this.orderService.createOrder(this.order);
    this.cartService.removeAllProducts();
    this.router.navigate(['/products-list']);
  }

}
