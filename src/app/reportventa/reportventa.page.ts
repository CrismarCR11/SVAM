import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-reportventa',
  templateUrl: './reportventa.page.html',
  styleUrls: ['./reportventa.page.scss'],
})
export class ReportventaPage implements OnInit {

  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.popularItems = this.apiService.reportventa;
    this.featuredItems = this.apiService.items;
  }

}
