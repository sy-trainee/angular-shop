import { NgModule } from '@angular/core';

import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    SharedModule
  ]
})
export class OrdersModule { }
