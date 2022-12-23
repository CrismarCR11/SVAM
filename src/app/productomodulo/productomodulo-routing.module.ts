import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductomoduloPage } from './productomodulo.page';

const routes: Routes = [
  {
    path: '',
    component: ProductomoduloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductomoduloPageRoutingModule {}
