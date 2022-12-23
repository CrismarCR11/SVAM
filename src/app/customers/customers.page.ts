import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CartServiceService } from '../services/api/cart-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  product: any=[];
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 2.3,
  };
  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor(public apiService: ApiService,
    private cartService: CartServiceService) { }

  ngOnInit() {
    this.product = this.cartService.getProduct();
    this.popularItems = this.apiService.items;
    console.log("producto: ", this.product);
    this.featuredItems = this.popularItems.concat(this.product);
    console.log(this.featuredItems);
    
    //this.featuredItems = this.apiService.items;
  }

}
