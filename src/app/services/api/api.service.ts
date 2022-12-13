import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 3, name: 'Netflix', price: 700, category: 'USA', img: 'assets/imgs/netflix.png' },
    { id: 3, name: 'Disney Plus', price: 700, category: 'USA', img: 'assets/imgs/disney-plus.jpg' },
    { id: 3, name: 'Star Plus', price: 700, category: 'USA', img: 'assets/imgs/star+.png' },
    { id: 3, name: 'Iphone 11', price: 700, category: 'USA', img: 'assets/imgs/iphone11.jpg' },
    { id: 1, name: 'Aloe Plant', price: 700, category: 'INDIA', img: 'assets/imgs/aloe.png' },
    { id: 2, name: 'Echeveria', price: 500, category: 'INDIA', img: 'assets/imgs/2.png' },
    { id: 3, name: 'Snake Plant', price: 700, category: 'USA', img: 'assets/imgs/3.png' },
  ];

  algo: any[] = [
    { id: 1, name: 'nose', price: 700, category: 'INDIA', img: 'assets/imgs/aloe.png' },
    { id: 2, name: 'vamos', price: 500, category: 'INDIA', img: 'assets/imgs/2.png' },
    { id: 3, name: 'xd', price: 700, category: 'USA', img: 'assets/imgs/3.png' },
  ];

  usuarios: any[] = [
    { id: 1, name: 'Rodrigo', telefono: 78945678, correo: 'rod@gmail.com' },
    { id: 2, name: 'Carlos', telefono: 78945678, correo: 'carlos@gmail.com' },
    { id: 3, name: 'Carolina', telefono: 78945678, correo: 'Carolina@gmail.com' },
  ];

  constructor() { }

  
}
