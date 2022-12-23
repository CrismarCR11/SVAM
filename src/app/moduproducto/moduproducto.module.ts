import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuproductoPageRoutingModule } from './moduproducto-routing.module';

import { ModuproductoPage } from './moduproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModuproductoPageRoutingModule
  ],
  declarations: [ModuproductoPage]
})
export class ModuproductoPageModule {}
