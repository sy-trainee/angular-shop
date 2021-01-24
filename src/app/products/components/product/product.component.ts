import { Component, Input, OnInit } from '@angular/core';

import { ProductModel } from '../../../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log('Someone tried to buy an item');
  }

}
