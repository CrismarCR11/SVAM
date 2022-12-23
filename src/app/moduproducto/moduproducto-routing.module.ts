import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuproductoPage } from './moduproducto.page';

const routes: Routes = [
  {
    path: '',
    component: ModuproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuproductoPageRoutingModule {}
