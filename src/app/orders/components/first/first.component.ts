import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
