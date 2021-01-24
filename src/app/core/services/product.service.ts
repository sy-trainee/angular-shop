import { Injectable } from '@angular/core';


export enum ProductCategory {
  Books,
  Drinks,
  Other
}

export class ProductModel {
  id: string;

  name: string;
  description: string;
  category: ProductCategory;

  price: number;
  isAvailable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public myProducts: Array<ProductModel> = [
    {id: '1', name: 'Watch', description: '', category: ProductCategory.Other, price: 99.90, isAvailable: true},
    {id: '2', name: 'Mag', description: '', category: ProductCategory.Other, price: 9.10, isAvailable: true},
    {id: '3', name: 'Bag', description: '', category: ProductCategory.Other, price: 12.50, isAvailable: true},
    {id: '4', name: 'Note', description: '', category: ProductCategory.Other, price: 2.50, isAvailable: true},
    {id: '5', name: 'Pencil', description: '', category: ProductCategory.Other, price: 0.15, isAvailable: true},
  ];

  getProducts(): Array<ProductModel> {
    return this.myProducts;
  }

}
