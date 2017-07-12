import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  noticias: FirebaseListObservable<any[]>
  constructor(public db: AngularFireDatabase) { }

  getNoticias(){
    this.noticias = this.db.list('/'); //as FirebaseListObservable<Noticias[]>
    return this.noticias;
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
