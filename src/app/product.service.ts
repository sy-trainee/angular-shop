import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductModel {
  name: string;
  price: number;
}

export class ProductService {

  constructor() { }
  
  public mySentences:Array<ProductModel> = [
    {name: 'Watch', price: 99.90},
    {name: 'Mag', price: 9.10},
    {name: 'Bag', price: 12.50},
    {name: 'Note', price: 2.50}
  ];

  getProducts() {  
    return this.mySentences;
  }
  
}
