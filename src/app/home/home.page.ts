import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombre = '';
  celular = 0;
  email = '';
  constructor() { }

  ngOnInit() {
    var usuario = localStorage.getItem('usuario');

    //const dato = localStorage.getItem('usuario');
    //Solo entra si no es nulo. 
    if(usuario) 
    {var dato=JSON.parse(usuario);
    }
    console.log(usuario);
    this.nombre=dato.name;
    this.celular=dato.telefono;
    this.email=dato.correo;
  }

}
