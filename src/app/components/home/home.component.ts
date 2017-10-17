import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //noticias:{};
  public noticias:any[];
  image:any;
  noticia:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    /*this.firebaseService.getNoticias().subscribe((t) => {
      this.noticias = t;
      //console.log(this.noticias);
      
      
    });*/
    //Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
    this.firebaseService.getNoticias().subscribe(value=> {
      this.noticias = value;
    });
    

  }


}