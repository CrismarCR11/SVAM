import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/api/cart-service.service';
import { take } from 'rxjs/operators';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  item: any;
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public apiService: ApiService,
    private route: ActivatedRoute,) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }
  
   popularItems: any[] = [];
  ngOnInit() {
    
  }

  async mostrar(){
    var f = this.formularioLogin.value;
    this.popularItems = this.apiService.usuarios;
    console.log(this.popularItems);
    var usuario = localStorage.getItem('usuario');

    //const dato = localStorage.getItem('usuario');
    //Solo entra si no es nulo. 
    if(usuario) 
    {var dato=JSON.parse(usuario);
    }
    console.log("item: ",this.item);
      const name = f.nombre ;
      //console.log(name);
      this.item = this.apiService.getUser(name);
      //console.log(this.item);
      
      if(this.item != undefined)
      {
        console.log("hola");
        if( this.item.name.toLocaleLowerCase()== f.nombre && this.item.password==f.password ){
          console.log('Ingresado');
          localStorage.setItem('ingresado','true');
          localStorage.setItem('usuario',JSON.stringify(this.item));
          this.navCtrl.navigateRoot('home');
          location.reload();
        }else{
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos que ingresaste son incorrectos.',
            buttons: ['Aceptar']
          });
      
          await alert.present();
        }
      }
      else{
        
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }

     /* if((dato.nombre == f.nombre && dato.password == f.password) || (this.item.name.toLocaleLowerCase()== f.nombre && this.item.password==f.password && this.item !== undefined) ){
        console.log('Ingresado');
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('home');
      }else{
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
    
        await alert.present();
      }*/

    /*this.popularItems.forEach(elemento =>{
      
      if ((elemento.name.toLocaleLowerCase()==f.nombre && elemento.password==f.password) || (dato.nombre == f.nombre && dato.password == f.password)){
        //console.log("hola "+elemento.name);
        console.log('Ingresado');
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('home');
      }
      else {
        
      }
     
    });*/
   
    //ejemplo de resolución.
    
    //console.log(dato);
    
  }
  
  handleSearch = (event: any) => {
    
    
    this.popularItems = this.popularItems.filter(x => x.toLocaleLowerCase().indexOf(event) >= 0);
  }

  async ingresar(){

    
    var f = this.formularioLogin.value;

    var usuario = localStorage.getItem('usuario');

    //const dato = localStorage.getItem('usuario');
    //Solo entra si no es nulo. 
    if(usuario) 
    {var dato=JSON.parse(usuario);}
    //ejemplo de resolución.
    
    console.log(dato);
    if(dato.nombre == f.nombre && dato.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}
