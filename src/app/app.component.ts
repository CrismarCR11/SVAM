import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'customers', url: '/customers', icon: 'people' },
    { title: 'login', url: '/login', icon: 'people' },
    { title: 'registro', url: '/registro', icon: 'people' },
    { title: 'categoria', url: '/categoria', icon: 'category' },
    { title: 'producto', url: '/producto', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
