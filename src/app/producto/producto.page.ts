import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { ModuproductoPage } from '../moduproducto/moduproducto.page';
import { CartServiceService } from '../services/api/cart-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  product: any;
  

  popularItems: any[] = [];
  featuredItems: any[] = [];
  constructor(public apiService: ApiService,
    private modalCtrl:ModalController,
    private cartService: CartServiceService) { }

  ngOnInit() {
    this.product = this.cartService.getProduct();
    this.popularItems = this.apiService.items;
    console.log("producto: ", this.product);
    this.featuredItems = this.popularItems.concat(this.product);
    console.log(this.featuredItems);
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ModuproductoPage,
      componentProps:{
        nombre:'rodrigo',
        pais: 'costa rica'
      }
    });

    await modal.present();

  }

}
