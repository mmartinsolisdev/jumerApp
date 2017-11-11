import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  public listNoticias: FirebaseListObservable<any[]>;
  public listAutores: FirebaseListObservable<any[]>;
  public listCategorias: FirebaseListObservable<any[]>;
  public isLoggedIn: boolean;
  noticia = { path: null, imagenName: null, url: null }

  constructor(public nav: NavbarService,
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService,
    private firebaseDB: AngularFireDatabase,
    private route: ActivatedRoute) {
    authService.isAuthenticated().subscribe(
      success => this.isLoggedIn = success
    );
  }

  ngOnInit() {
    // Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0);
    this.nav.hide();
    this.listNoticias = this.firebaseService.getNoticias();
    this.listAutores = this.firebaseService.getAutores();
    this.listCategorias = this.firebaseService.getCategorias();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  verNota(selectedNoticia) {
    this.noticia = selectedNoticia;
    // console.log(this.noticia);
  }

  guardarNota(selectedNoticia) {
    if (selectedNoticia.$key == undefined) {
      // No hacer nada si no se envia la Key
    } else {
      selectedNoticia.imagenName = (<HTMLInputElement>document.getElementById('imagenName')).value;
      // console.log(selectedNoticia.imagenName);
      this.firebaseService.uploadFiles().then((url) => {
        if (url == 1) {
          selectedNoticia.url = selectedNoticia.url;
        } else {
          selectedNoticia.url = url;
        }
        // console.log(selectedNoticia.url);
        this.firebaseDB.database.ref('noticias/' + selectedNoticia.$key).update(selectedNoticia);
        this.noticia = { path: null, imagenName: null, url: null }
      });
    }
  }

  agregarNota(selectedNoticia) {
    if (selectedNoticia.$key == undefined) {
      this.noticia.path = 'img/publicaciones/';
      this.noticia.imagenName = (<HTMLInputElement>document.getElementById('imagenName')).value;
      this.firebaseService.uploadFiles().then((url) => {
        this.noticia.url = url;
        // console.log(this.noticia.url);
        this.firebaseDB.database.ref('noticias/').push(this.noticia);
        this.noticia = { path: null, imagenName: null, url: null }
      });
    } else {
      // No hace nada si ya existe la noticia
    }
  }

  removeNota(selectedNoticia) {
    console.log(selectedNoticia);
    this.firebaseDB.database.ref('noticias/' + selectedNoticia.$key).remove();
    this.noticia = { path: null, imagenName: null, url: null }
  }

  cancelarNota(selectedNoticia) {
    this.noticia = { path: null, imagenName: null, url: null }
  }
}