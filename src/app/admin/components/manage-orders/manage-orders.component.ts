import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderModel, OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders: Observable<Array<OrderModel>>;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
