import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../core/services/product.service';
import { ProductModel } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { CartItemModel } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListItems: Promise<Array<ProductModel>>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productListItems = this.productService.getProducts();
  }

  getProducts(): Promise<Array<ProductModel>> {
    return this.productListItems;
  }

  buyProduct(product: ProductModel): void {
    const cartItem = new CartItemModel();
    cartItem.id = product.id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    this.cartService.addProduct(cartItem);
  }

}
