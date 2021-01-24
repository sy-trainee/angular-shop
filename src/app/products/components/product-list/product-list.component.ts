import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../core/services/product.service';
import { ProductModel } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts(): Array<ProductModel> {
    return this.productService.getProducts();
  }

}
