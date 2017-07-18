import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  exists = true;
  path: any;

  constructor(private router: Router){
    this.toggleExists();
    this.path = this.router.url;
    console.log(this.path);
  }
  


  toggleExists() {
    this.exists = !this.exists;
    console.log(this.exists);
  }
}