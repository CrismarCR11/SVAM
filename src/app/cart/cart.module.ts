import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { PagoqrPage } from '../pagoqr/pagoqr.page';
import { PagoqrPageModule } from '../pagoqr/pagoqr.module';

@NgModule({
  entryComponents: [
    PagoqrPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    PagoqrPageModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
