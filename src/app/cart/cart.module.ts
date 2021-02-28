import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { SharedModule } from './../shared/shared.module';
import { CartListComponent, CartItemComponent } from './components';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    SharedModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
