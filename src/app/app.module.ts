import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';

import { FirstComponent } from './orders/components/first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ProductsModule,
    CartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
