import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/api/cart-service.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PagoqrPage } from '../pagoqr/pagoqr.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectItems:any = [];
  total = 0;

  constructor(
    private cartService: CartServiceService,
    private router: Router,
    private modalCtrl:ModalController) { 
    
  }

  ngOnInit() {
    console.log("hola")
    let items = this.cartService.getCart();
    let selected: any = {};
    console.log(items);
    for(let obj of items){
      selected[obj.id] = {...obj, count: 1};

    }

    this.selectItems = Object.keys(selected).map(key => selected[key]);
    console.log('items: ', this.selectItems);
    this.total = this.selectItems.reduce((a:any, b:any) => a+ (b.quantity * b.price), 0);
  }
  
  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: PagoqrPage,
      componentProps:{
        nombre:'rodrigo',
        pais: 'costa rica'
      }
    });

    await modal.present();

  }

  remove(){
    this.cartService.removeCart();
    
    //this.router.navigate(["/customers"]);
    
    
  }


}
