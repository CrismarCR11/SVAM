import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/api/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectItems:any = [];
  total = 0;

  constructor(
    private cartService: CartServiceService,
    private router: Router) { 
    
  }

  ngOnInit() {
    console.log("hola")
    let items = this.cartService.getCart();
    let selected: any = {};
    console.log(items);
    for(let obj of items){
      selected[obj.id] = {...obj, count: 1};

    }

    this.selectItems = Object.keys(selected).map(key => selected[key]);
    console.log('items: ', this.selectItems);
    this.total = this.selectItems.reduce((a:any, b:any) => a+ (b.quantity * b.price), 0);
  }
  
  presentModal(){

  }

  remove(){
    this.cartService.removeCart();
    this.router.navigate(["/customers"]);
    
  }


}
