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
image: any;

constructor(private firebaseService:FirebaseService) { }

ngOnInit() {
/*this.firebaseService.getNoticias().subscribe((t) => {
this.noticias = t;
//console.log(this.noticias);
});*/
this.firebaseService.getNoticias().subscribe(value=> {
//this.noticias = value;
let noticia=[];
for(let noticia of value){
console.log(noticia)
var storageRef = firebase.storage().ref().child("img/publicaciones/"+noticia.imagenName);
storageRef.getDownloadURL().then(url => this.image = url);
}
});

}

}
