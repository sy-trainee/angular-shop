import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';

import { GeneratorService } from './../core/services/generator.service';
import { GeneratedString } from './../core/services/generator.factory';
import { GeneratorFactory } from './../core/services/generator.factory';

import { LocalStorageService } from './../core/services/local-storage.service';
import { STORAGE } from './../core/services/local-storage.service';

import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [ HighlightDirective, BorderDirective, OrderByPipe ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    { provide: STORAGE, useClass: LocalStorageService },
    { provide: GeneratedString, useFactory: GeneratorFactory(36), deps: [GeneratorService] }
  ],
  exports: [ CommonModule, FormsModule, HighlightDirective, BorderDirective, OrderByPipe ]
})
export class SharedModule { }
