import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartItemModel, CartService } from 'src/app/core/services/cart.service';
import { ProductModel, ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductModel;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('productID');
    this.productService.getProduct(id).then(product => this.product = product);
  }

  onBuy(): void {
    const cartItem = new CartItemModel();
    cartItem.id = this.product.id;
    cartItem.name = this.product.name;
    cartItem.price = this.product.price;
    this.cartService.addProduct(cartItem);
  }

}
