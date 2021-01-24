import { Injectable, EventEmitter } from '@angular/core';

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

  private myCartItems: Map<string, CartItemModel> = new Map();

  private totalCount = 0;
  private totalPrice = 0;

  private cardUpdated: EventEmitter<Array<CartItemModel>> = new EventEmitter();

  constructor() { }

  getCart(): Array<CartItemModel> {
    return Array.from(this.myCartItems.values());
  }

  isEmpty(): boolean {
    return this.myCartItems.values.length < 1;
  }

  clearCart(): void {
    this.myCartItems = new Map();
    this.countTotalsAndEmit();
  }

  addProduct(product: CartItemModel): void {
    if (this.myCartItems.has(product.id)) {
      const existingProduct = this.myCartItems.get(product.id);
      existingProduct.count++;
    } else {
      product.count = 1;
      this.myCartItems.set(product.id, product);
    }
    this.countTotalsAndEmit();
  }

  getCardUpdatedEmitter(): EventEmitter<Array<CartItemModel>> {
    return this.cardUpdated;
  }

  getTotalCount(): number {
    return this.totalCount;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  private countTotalsAndEmit(): void {
    this.countTotals();
    this.cardUpdated.emit(this.getCart());
  }

  private countTotals(): void {
    let totalCount = 0;
    let totalPrice = 0;
    for (const item of this.myCartItems.values()) {
      totalPrice += item.count * item.price;
      totalCount += item.count;
    }
    this.totalCount = totalCount;
    this.totalPrice = +totalPrice.toFixed(2);
  }

}
