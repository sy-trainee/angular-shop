import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';

import { GeneratorService } from './../core/services/generator.service';
import { GeneratedString } from './../core/services/generator.factory';
import { GeneratorFactory } from './../core/services/generator.factory';

import { LocalStorageService } from './../core/services/local-storage.service';
import { STORAGE } from './../core/services/local-storage.service';


@NgModule({
  declarations: [ HighlightDirective, BorderDirective ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: STORAGE, useClass: LocalStorageService },
    { provide: GeneratedString, useFactory: GeneratorFactory(36), deps: [GeneratorService] }
  ],
  exports: [ HighlightDirective, BorderDirective ]
})
export class SharedModule { }
