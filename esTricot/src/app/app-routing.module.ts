import { GuardGuard } from './guards/guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [GuardGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'see-products',
    loadChildren: () => import('./pages/see-products/see-products.module').then( m => m.SeeProductsPageModule), canActivate: [GuardGuard]
  },  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'my-products',
    loadChildren: () => import('./pages/my-products/my-products.module').then( m => m.MyProductsPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./pages/historic/historic.module').then( m => m.HistoricPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
