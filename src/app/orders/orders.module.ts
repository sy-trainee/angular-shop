import { NgModule } from '@angular/core';

import { OrderComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    OrdersRoutingModule
  ]
})
export class OrdersModule {}
