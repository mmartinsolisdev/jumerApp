import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  pathad:string;

  constructor(public _router: Router) { 
    this.obtener();
  }

  ngOnInit() {
    
  }
 obtener(){
   // this.pathad = this.firebaseService.getRuta();
    //console.log(this.path);
   // return this.pathad;
   this.pathad = this._router.url;
   console.log(this.pathad);
   return this.pathad;
 }
}
