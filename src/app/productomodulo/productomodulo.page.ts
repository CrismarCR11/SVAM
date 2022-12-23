import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { CartServiceService } from '../services/api/cart-service.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-productomodulo',
  templateUrl: './productomodulo.page.html',
  styleUrls: ['./productomodulo.page.scss'],
})
export class ProductomoduloPage implements OnInit {

  product: any;

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private cartService: CartServiceService) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'precio': new FormControl("", Validators.required),
      'categoria': new FormControl("", Validators.required)
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
      "descripcion": 'dispositivos infinitos :v',
      "img": 'assets/imgs/youtube.png'

    }
    this.cartService.addProductmod(this.product);

    
    //console.log("product: ", this.product);
  
  //this.prducto.ngOnInit();
  console.log(f.img, f.nombre);
  this.navCtrl.navigateRoot('home');
  
  }
}
