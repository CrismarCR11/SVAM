import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.popularItems = this.apiService.categoria;
    this.featuredItems = this.apiService.items;
  }

}
