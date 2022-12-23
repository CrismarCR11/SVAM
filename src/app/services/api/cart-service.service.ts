import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart :any = [];
  private prodmod :any = [];
  getCart(){
    return this.cart;
  }

  getProduct(){
    return this.prodmod;
  }

  addProduct(product:any){
    //console.log(caca);
    this.cart.push(product);
    console.log(this.cart);
    //localStorage.setItem('caca',JSON.stringify(caca));
    
  }

  addProductmod(product:any){
    //console.log(caca);
    this.prodmod.push(product);
    console.log(this.prodmod);
    //localStorage.setItem('caca',JSON.stringify(caca));
    
  }

  removeCart(){
    this.cart = [];
    location.reload();
    console.log(this.cart);
  }

  constructor() { }
}
