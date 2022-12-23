import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductomoduloPageRoutingModule } from './productomodulo-routing.module';

import { ProductomoduloPage } from './productomodulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProductomoduloPageRoutingModule
  ],
  declarations: [ProductomoduloPage]
})
export class ProductomoduloPageModule {}
