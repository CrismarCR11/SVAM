import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  admin = false;
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'customers', url: '/customers', icon: 'people' },
    { title: 'login', url: '/login', icon: 'people' },
    { title: 'registro', url: '/registro', icon: 'people' },
    { title: 'categoria', url: '/categoria', icon: 'category' },
    { title: 'producto', url: '/producto', icon: 'people' },
    { title: 'cart', url: '/cart', icon: 'people' },
    { title: 'reporte venta', url: '/reportventa', icon: 'people' },
  ];
  public appPages2 = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'customers', url: '/customers', icon: 'people' },
    { title: 'login', url: '/login', icon: 'people' },
    { title: 'registro', url: '/registro', icon: 'people' },
    
    { title: 'cart', url: '/cart', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
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
}
