import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { CartServiceService } from 'src/app/services/api/cart-service.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  item: any;
  product: any;
  quantity =1;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe(paramMap => {
      console.log(paramMap);
      if(!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }
      const id = paramMap.get('id');
      console.log(id);
      this.item = this.apiService.getItem(id);
      console.log(this.item);
      
    })
    
  }
  
  addCart(){
    
    console.log(this.item.name);
    this.product = {
      "id":this.item.id,
      "quantity":this.quantity,
      "name":this.item.name,
      "price":this.item.price,

    }
    this.cartService.addProduct(this.product);
    //console.log("product: ", this.product);
  }

  addItem(){
    if(this.quantity > 0){
      this.quantity += 1;
      
    }
  }

  removeItem(){
    if(this.quantity > 1){
      this.quantity -= 1;
      
    }
  }
}
