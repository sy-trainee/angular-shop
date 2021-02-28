import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathNotFoundComponent, LoginComponent } from './components';

@NgModule({
  declarations: [
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccessoryModule { }
