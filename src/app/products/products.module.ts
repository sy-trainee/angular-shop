import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductListItemComponent, ProductListComponent, ProductComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
