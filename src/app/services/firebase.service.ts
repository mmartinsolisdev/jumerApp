import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';



@Injectable()
export class FirebaseService {
  noticias: FirebaseListObservable<any[]>
  path: any;
  constructor(public db: AngularFireDatabase, private _router: Router) { }
 

  getNoticias(){
    this.noticias = this.db.list('/'); //as FirebaseListObservable<Noticias[]>
    return this.noticias;
  }
  getRuta(){
     this.path = this._router.url;
     return this.path;
  }
}

interface Noticias{
  $key?:string;
  autor?:string;
  categoria?:string;
  fecha?:string;
  imagen?:string;
  titulo?:string;
}
