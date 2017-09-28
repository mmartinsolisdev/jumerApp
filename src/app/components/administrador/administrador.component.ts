import { Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  noticia = {path: null, imagenName:null}

  constructor(public nav: NavbarService,
  private authService: AuthService,
  private router: Router,
  private firebaseService: FirebaseService,
  private firebaseDB: AngularFireDatabase,
  private route:ActivatedRoute) {
  authService.isAuthenticated().subscribe(
  success => this.isLoggedIn = success
  );
  }

  ngOnInit() {
    this.nav.hide();
    this.listNoticias = this.firebaseService.getNoticias();
    this.listAutores = this.firebaseService.getAutores();
    this.listCategorias = this.firebaseService.getCategorias();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  verNota(selectedNoticia){
    this.noticia = selectedNoticia;
    //console.log(this.noticia);
  }

  guardarNota(selectedNoticia){
    if(selectedNoticia.$key == undefined){
    //No hacer nada si no se envia la Key
    }else{
      selectedNoticia.imagenName = (<HTMLInputElement>document.getElementById('imagenName')).value;
      this.firebaseDB.database.ref('noticias/'+selectedNoticia.$key).update(selectedNoticia);
      console.log(selectedNoticia);
      this.firebaseService.uploadFiles();
      this.noticia = {path: null, imagenName:null}
    }
  }

  agregarNota(selectedNoticia){
    if(selectedNoticia.$key == undefined){
      this.noticia.path = "img/publicaciones/";
      this.noticia.imagenName = (<HTMLInputElement>document.getElementById('imagenName')).value;
      let not = this.firebaseDB.database.ref('noticias/').push(this.noticia);
      this.firebaseService.uploadFiles();
      this.noticia = {path: null, imagenName:null}
    }else{
      //No hace nada si ya existe la noticia
    }
  }

  removeNota(selectedNoticia){
    console.log(selectedNoticia);
    this.firebaseDB.database.ref('noticias/' + selectedNoticia.$key).remove();
    this.noticia = {path: null, imagenName:null}
  }

  cancelarNota(selectedNoticia){
    this.noticia = {path: null, imagenName:null}
  }


}