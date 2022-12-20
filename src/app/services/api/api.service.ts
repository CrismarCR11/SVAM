import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name: 'Netflix', price: 700, category: 'streaming', descripcion:  'cuenta con 4 dispositivos', img: 'assets/imgs/netflix.png' },
    { id: 2, name: 'Disney Plus', price: 700, category: 'streaming', descripcion:  'cuenta con 4 dispositivos', img: 'assets/imgs/disney-plus.jpg' },
    { id: 3, name: 'Star Plus', price: 700, category: 'streaming', descripcion:  'cuenta con 4 dispositivos', img: 'assets/imgs/star+.png' },
    { id: 4, name: 'Iphone 11', price: 700, category: 'celulares', descripcion:  'nuevo, caja sellada', img: 'assets/imgs/iphone11.jpg' },
    { id: 5, name: 'Aloe Plant', price: 700, category: 'plantas', descripcion:  'del mas alla',  img: 'assets/imgs/aloe.png' },
    { id: 6, name: 'Echeveria', price: 500, category: 'plantas', descripcion:  'del mas alla',  img: 'assets/imgs/2.png' },
    { id: 7, name: 'Snake Plant', price: 700, category: 'plantas', descripcion:  'del mas alla',  img: 'assets/imgs/3.png' },
  ];

  categoria: any[] = [
    { id: 1, name: 'streaming', descipcion: 'venta de cuentas de striming', category: 'INDIA', img: 'assets/imgs/aloe.png' },
    { id: 2, name: 'celulares', descipcion:'venta de ceclulares' , category: 'INDIA', img: 'assets/imgs/2.png' },
    { id: 3, name: 'plantas', descipcion:'venta de plantas' , category: 'USA', img: 'assets/imgs/3.png' },
  ];

  usuarios: any[] = [
    { id: 1, name: 'Rodrigo', telefono: 78945678, correo: 'rod@gmail.com', password: 1234 },
    { id: 2, name: 'Carlos', telefono: 78945678, correo: 'carlos@gmail.com', password: 1234 },
    { id: 3, name: 'Carolina', telefono: 78945678, correo: 'Carolina@gmail.com', password: 1234 },
  ];

  reportventa: any[] = [
    { id: 1, total: 1, item: 'Netflix', estado: 'pagado', usuario: 'Rodrigo', fecha:'2022-12-20'},
    { id: 2, total: 1, item: 'Disney Plus', estado: 'pagado', usuario: 'Rodrigo', fecha:'2022-12-20'},
    { id: 3, total: 1, item: 'Iphone 11', estado: 'pagado', usuario: 'Rodrigo', fecha:'2022-12-20'},
    { id: 4, total: 1, item: 'Netflix', estado: 'pagado', usuario: 'Carolina', fecha:'2022-12-20'},
    { id: 5, total: 1, item: 'Echeveria', estado: 'pagado', usuario: 'Carolina', fecha:'2022-12-20'},
  ];

  constructor() { }
  
  getItem(id: any) {
    const item = this.items.find(x => x.id == id);
    return item;
  }

  getUser(name: any) {
    const item = this.usuarios.find(x => x.name.toLocaleLowerCase() == name);
    return item;
  }
  
}
