import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent, ManageOrdersComponent } from './components';
import { AuthGuard, CanDeactivateGuard } from './../core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: ManageProductsComponent },
          { path: 'product/add', component: ManageProductsComponent },
          {
            path: 'product/edit:productID',
            component: ManageProductsComponent,
            canDeactivate: [CanDeactivateGuard]
          },
          { path: 'orders', component: ManageOrdersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

  static components = [
    AdminComponent,
    ManageProductsComponent,
    ManageOrdersComponent
  ];

}
