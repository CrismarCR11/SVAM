import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  admin = false;
  public appPages = [
    { title: 'Perfil', url: '/home', icon: 'people' },
    { title: 'customers', url: '/customers', icon: 'storefront' },
   
    { title: 'categoria', url: '/categoria', icon: 'file-tray' },
    { title: 'producto', url: '/producto', icon: 'bag' },
    { title: 'reporte venta', url: '/reportventa', icon: 'clipboard' },
  ];
  public appPages2 = [
    { title: 'perfil', url: '/home', icon: 'people' },
    { title: 'customers', url: '/customers', icon: 'storefront' },
    
    
    { title: 'cart', url: '/cart', icon: 'cart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public navCtrl: NavController,) {
    
    var usuario = localStorage.getItem('usuario');

    //const dato = localStorage.getItem('usuario');
    //Solo entra si no es nulo. 
    if(usuario) 
    {var dato=JSON.parse(usuario);
      if(dato.name === 'Carlos'){
        this.admin=true;
      }
      
      
      console.log("hola xd", this.admin);
    }
  }

  salir(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  }
}
