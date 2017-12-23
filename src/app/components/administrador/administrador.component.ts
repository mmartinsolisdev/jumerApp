import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { routerTransition } from '../../_animations/fadeInAnimation';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  // make fade in animation available to this component
animations: [routerTransition()],
host: { '[@routerTransition]': '' }
})
export class AdministradorComponent implements OnInit {
  public listNoticias: FirebaseListObservable<any[]>;
  public listAutores: FirebaseListObservable<any[]>;
  public listCategorias: FirebaseListObservable<any[]>;
  public isLoggedIn: boolean;
  noticia = { path: null, imagenName: null, url: null, contenido: null };
  public contentEditor: string;

  constructor(public nav: NavbarService,
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService,
    public firebaseDB: AngularFireDatabase,
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
    this.contentEditor = selectedNoticia.contenido;
    // console.log(this.contentEditor);
  }

  guardarNota(selectedNoticia) {
    if (selectedNoticia.$key == undefined) {
      // No hacer nada si no se envia la Key
    } else {
      selectedNoticia.imagenName = (<HTMLInputElement>document.getElementById('imagenName')).value;
      // selectedNoticia.contenido = document.getElementsByClassName('fr-element').item(0).innerHTML;
      // console.log(selectedNoticia.imagenName);
      this.firebaseService.uploadFiles().then((url) => {
        if (url == 1) {
          selectedNoticia.url = selectedNoticia.url;
        } else {
          selectedNoticia.url = url;
        }
        // selectedNoticia.contenido = this.contentEditor;
        console.log(selectedNoticia.contenido);
        this.firebaseDB.object('noticias/' + selectedNoticia.$key).update(selectedNoticia);
        this.noticia = { path: null, imagenName: null, url: null, contenido: null };
        console.log(selectedNoticia.contenido);
      });
    }
  }

  agregarNota(selectedNoticia) {
    if (selectedNoticia.$key == undefined) {
      this.noticia.path = 'img/publicaciones/';
      this.noticia.imagenName = (<HTMLInputElement>document.getElementById('imagenName')).value;
      // document.getElementsByClassName('fr-element').item(0).innerHTML;
      this.firebaseService.uploadFiles().then((url) => {
        this.noticia.url = url;
        // console.log(this.noticia.url);
        this.firebaseDB.list('noticias/').push(this.noticia);
        this.noticia = { path: null, imagenName: null, url: null, contenido: null };
      });
    } else {
      // No hace nada si ya existe la noticia
    }
  }

  removeNota(selectedNoticia) {
    // console.log(selectedNoticia);
    this.firebaseDB.object('noticias/' + selectedNoticia.$key).remove();
    this.noticia = { path: null, imagenName: null, url: null, contenido: null };
  }

  cancelarNota(selectedNoticia) {
    this.noticia = { path: null, imagenName: null, url: null, contenido: null };
  }

  public options: Object = {
    placeholderText: 'Texto',
    charCounterCount: true,
    // angularIgnoreTags: ['style'],
    // htmlAllowedTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    events: {
      'froalaEditor.focus': function (e, editor) {
       console.log(editor.html.get());
      }
    }
  };
}

