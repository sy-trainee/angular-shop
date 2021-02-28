import { Injectable } from '@angular/core';
import {
  Router,
  CanLoad,
  Route,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../services/cart.service';

@Injectable()
export class IsCartEmptyGuard implements CanLoad {
  constructor(public cartService: CartService, public router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canLoad: boolean = !this.cartService.isEmptyCart();
    console.log('IsCartEmptyGuard is called result: ' + canLoad);
    return canLoad;
  }
}
