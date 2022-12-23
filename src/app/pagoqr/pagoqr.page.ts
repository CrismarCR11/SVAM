import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pagoqr',
  templateUrl: './pagoqr.page.html',
  styleUrls: ['./pagoqr.page.scss'],
})
export class PagoqrPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  Salirmodal(){
    this.modalCtrl.dismiss();
  }

  
}
