import { Component, OnInit, Optional, Inject } from '@angular/core';

import { ConstantsService, сonstantsInstance } from './../../../core/services/constants.service';
import { GeneratorService } from './../../../core/services/generator.service';
import { GeneratedString } from './../../../core/services/generator.factory';
import { ConfigOptionsService } from './../../../core/services/config.options.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { STORAGE } from './../../../core/services/local-storage.service';


export enum Category {
  Books,
  Drinks,
  Other
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  barCode = [14, 12, 23];

  constructor(
    @Inject(STORAGE) private storage: LocalStorageService,
    @Optional() private constantsService: ConstantsService,
    @Optional() private generatorService: GeneratorService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(GeneratedString) private generatedString: string,
  ) { }

  ngOnInit(): void {
    console.log('GeneratedString(10):', this.generatedString);
    console.log('Kinda UUID:', this.generatorService.generate(36));
    console.log('Application info :', this.constantsService.getAllData());
    this.storage.set('token', 'xxxxxx');
    console.log('token value from storage:', this.storage.get('token'));
  }

}
