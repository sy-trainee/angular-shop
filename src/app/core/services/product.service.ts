import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  async getProducts(): Promise<Array<ProductModel>> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(response => response as ProductModel[])
      .catch(this.handleError);    
  }

  getProduct(id: string): Promise<ProductModel> {
    const url = `${this.productsUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
