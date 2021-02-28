import { Injectable, EventEmitter } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export class CartItemModel {
  id: string;
  name: string;
  price: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Map<string, CartItemModel> = new Map();

  private totalQuantity = 0;
  private totalSum = 0;

  private cardUpdated: EventEmitter<Array<CartItemModel>> = new EventEmitter();

  constructor(private localStorage: LocalStorageService) {
    const cartData: string = localStorage.get('cart');
    if (cartData) {
      this.cartProducts = new Map(JSON.parse(cartData));
    }
  }

  getProducts(): Array<CartItemModel> {
    return Array.from(this.cartProducts.values());
  }

  removeAllProducts(): void {
    this.cartProducts = new Map();
    this.updateCartDataAndEmit();
  }

  isEmptyCart(): boolean {
    return !(this.cartProducts.size > 0);
  }

  addProduct(product: CartItemModel): void {
    if (!product.count) {
      product.count = 1;
    }
    if (this.cartProducts.has(product.id)) {
      const existingProduct = this.cartProducts.get(product.id);
      existingProduct.count = existingProduct.count + product.count;
    } else {
      this.cartProducts.set(product.id, product);
    }
    this.updateCartDataAndEmit();
  }

  increaseQuantity(product: CartItemModel): void {
    if (this.cartProducts.has(product.id)) {
      const existingProduct = this.cartProducts.get(product.id);
      existingProduct.count++;
      this.updateCartDataAndEmit();
    }
  }

  decreaseQuantity(product: CartItemModel): void {
    if (this.cartProducts.has(product.id)) {
      const existingProduct = this.cartProducts.get(product.id);
      if (existingProduct.count > 1) {
        existingProduct.count--;
        this.updateCartDataAndEmit();
      }
    }
  }

  removeProduct(product: CartItemModel): void {
    this.cartProducts.delete(product.id);
    this.updateCartDataAndEmit();
  }

  getCardUpdatedEmitter(): EventEmitter<Array<CartItemModel>> {
    return this.cardUpdated;
  }

  getTotalCount(): number {
    return this.totalQuantity;
  }

  getTotalPrice(): number {
    return this.totalSum;
  }

  private updateCartDataAndEmit(): void {
    this.updateCartData();
    this.cardUpdated.emit(this.getProducts());
  }

  private updateCartData(): void {
    let totalCount = 0;
    let totalPrice = 0;
    for (const item of this.cartProducts.values()) {
      totalPrice += item.count * item.price;
      totalCount += item.count;
    }
    this.totalQuantity = totalCount;
    this.totalSum = +totalPrice.toFixed(2);
    this.localStorage.set('cart', JSON.stringify(Array.from(this.cartProducts.entries())));
  }

}
