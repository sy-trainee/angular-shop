import { Component, OnInit } from '@angular/core';

export enum Category {
  Books,
  Drinks,
  Other
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  barCode = [14, 12, 23];

  constructor() { }

  ngOnInit(): void {
  }

}
