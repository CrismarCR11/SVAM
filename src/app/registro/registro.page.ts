import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  
  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    localStorage.clear();
    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    var comida = {
      id: 1,
      nombre: "pastel",
      precio: 200
    }
    var pedido = {
      id: 1,
      nombre: "pastel",
      precio: 200,
      cantidad: 2
    }
    console.log(comida);
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('comida',JSON.stringify(comida));
    localStorage.setItem('pedido',JSON.stringify(pedido));

    //localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('login');
  }

}
