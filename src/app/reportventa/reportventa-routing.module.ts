import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportventaPage } from './reportventa.page';

const routes: Routes = [
  {
    path: '',
    component: ReportventaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportventaPageRoutingModule {}
