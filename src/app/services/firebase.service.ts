import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from "firebase";
import { AngularFireModule } from 'angularfire2/';

@Injectable()
export class FirebaseService {
    noticias: FirebaseListObservable<any[]>;
    autores: FirebaseListObservable<any[]>;
    categorias: FirebaseListObservable<any[]>;
    noticia: FirebaseObjectObservable<any>;

    constructor(public db: AngularFireDatabase, private _router: Router) { }

    getNoticias() {
        this.noticias = this.db.list('/noticias'); //as FirebaseListObservable<Noticias[]>;
        return this.noticias;
    }
    /*getDetallenoticias(){
    this.noticia = this.db.object('/noticias', {preserveSnapshot: true}); //as FirebaseObjectObservable<Noticias[]>;
    this.noticia.subscribe(snapshot => {
    console.log(snapshot.key)
    console.log(snapshot.val())
    });
    return this.noticia;
    }*/

    getAutores() {
        this.autores = this.db.list('/autores');
        return this.autores;
    }

    getCategorias() {
        this.categorias = this.db.list('/categorias');
        return this.categorias;
    }

    uploadFiles() {
        return new Promise((resolve, reject) => {
            const storageRef = firebase.storage().ref();
            for (const selectedFile of [(<HTMLInputElement>document.getElementById('imagen')).files[0]]) {
                if (selectedFile == undefined) {
                    // No hacer nada si no hay archivo
                    resolve(1);
                } else {
                    const imagesRef = storageRef.child('img/publicaciones/' + selectedFile.name);
                    imagesRef.put(selectedFile).then(function (snapshot) {
                        // return snapshot.metadata.downloadURLs[0];
                        resolve(snapshot.metadata.downloadURLs[0]);
                        Error('Algo mal ha pasado');
                        // console.log("Archivo SUbido");
                    });
                }
            }

        });
    }

    getNoticia(id) {
        this.noticia = this.db.object('/noticias/' + id);
        return this.noticia;
    }
}