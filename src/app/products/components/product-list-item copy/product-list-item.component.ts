import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductModel } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;

  @Input() product: ProductModel;
  @Output() buyEvent = new EventEmitter<ProductModel>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params); // log the entire params object
      console.log('productId = ' + params.productId); // log the value of id
    });
    const id = this.route.snapshot.paramMap.get('productId');
    console.log('productId = ' + id);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onBuy(): void {
    this.buyEvent.emit(this.product);
  }

}
