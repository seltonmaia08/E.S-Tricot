import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeProductsPageRoutingModule } from './see-products-routing.module';

import { SeeProductsPage } from './see-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeProductsPageRoutingModule
  ],
  declarations: [SeeProductsPage]
})
export class SeeProductsPageModule {}
