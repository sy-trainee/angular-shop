import { Injectable } from '@angular/core';



export class ProductModel {
  name: string;
  price: number;
}

// Нельзя отрывать декоратор класса от самого класса
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public myProducts: Array<ProductModel> = [
    {name: 'Watch', price: 99.90},
    {name: 'Mag', price: 9.10},
    {name: 'Bag', price: 12.50},
    {name: 'Note', price: 2.50}
  ];

  getProducts(): Array<ProductModel> {
    return this.myProducts;
  }

}
