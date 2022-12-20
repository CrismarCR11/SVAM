import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportventaPageRoutingModule } from './reportventa-routing.module';

import { ReportventaPage } from './reportventa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportventaPageRoutingModule
  ],
  declarations: [ReportventaPage]
})
export class ReportventaPageModule {}
