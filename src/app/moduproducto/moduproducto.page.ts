import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, ModalController, NavController } from '@ionic/angular';

import { CartServiceService } from '../services/api/cart-service.service';

@Component({
  selector: 'app-moduproducto',
  templateUrl: './moduproducto.page.html',
  styleUrls: ['./moduproducto.page.scss'],
})
export class ModuproductoPage implements OnInit {

  product: any;

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private cartService: CartServiceService,
    ) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  

  async guardarproducto(){
   
      var f = this.formularioRegistro.value;
      
      this.product = {
        
        "name":f.nombre,
        "price":f.precio,
        "category":'streaming',
        "descripcion": 'hola q hace',
        "img": 'assets/imgs/Star-plus.png'
  
      }
      this.cartService.addProductmod(this.product);

      
      //console.log("product: ", this.product);
    
    //this.prducto.ngOnInit();
    console.log(f.img, f.nombre);
  }
}
