import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeProductsPage } from './see-products.page';

const routes: Routes = [
  {
    path: '',
    component: SeeProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeProductsPageRoutingModule {}
