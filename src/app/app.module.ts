import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule
  ],
  // Это делать уже не нужно. Будем разбирать чуть позже.
  // providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Сервисы лучше перенесты в отдельную папку из корня проекта.
// Я предлагал core/services, но вы можете выбрать любое другое удобное место.
