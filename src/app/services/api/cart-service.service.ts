import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart :any = [];
  getCart(){
    return this.cart;
  }

  addProduct(caca:any){
    //console.log(caca);
    this.cart.push(caca);
    console.log(this.cart);
    //localStorage.setItem('caca',JSON.stringify(caca));
    
  }

  removeCart(){
    this.cart = [];
    console.log(this.cart);
  }

  constructor() { }
}
