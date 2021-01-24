import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ProductModel } from '../../../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() buyEvent = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.buyEvent.emit(this.product);
  }

}
