import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartListComponent } from './cart';
import { LoginComponent, PathNotFoundComponent } from './accessory';
import { IsCartEmptyGuard } from './core/guards/cart-empty-guard';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: CartListComponent
    },
    {
        path: 'order',
        canLoad: [IsCartEmptyGuard],
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PathNotFoundComponent,
        data: { title: 'Page Not Found' }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes/*, extraOptions*/),
        SharedModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
