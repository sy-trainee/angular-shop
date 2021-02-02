import { Injectable } from '@angular/core';

export const APP_DATA = { App: 'Shop', Ver: '0.3', API_URL: 'https://shop.me' };

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  getAllData(): any {
    return APP_DATA;
  }

}

export const сonstantsInstance = new ConstantsService();
