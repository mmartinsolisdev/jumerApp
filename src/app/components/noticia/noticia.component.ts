import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { routerTransition } from '../../_animations/fadeInAnimation';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class NoticiaComponent implements OnInit {
  id: string;
  noticia: {};
  noticiasColumna: {};
  url: string;
  public noticias: any[];
  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.rutaActiva(key);
    window.scrollTo(0, 0);
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getNoticia(this.id).subscribe(noticia => {
      this.noticia = noticia;
      this.url = noticia.url;
    });
    this.firebaseService.getNoticiasColumna().subscribe(noticias => {
      this.noticiasColumna = noticias;
      console.log(this.noticiasColumna);
      // this.noticias = Array(5).fill(4);
    });
  }
  rutaActiva(key) {
    this.id = this.route.snapshot.params['id'];
    if (this.id === key) {
      // NO hacer nada
    } else {
      // console.log(this.id);
      // console.log(key);
      window.scrollTo(0, 0);
      this.firebaseService.getNoticia(key).subscribe(noticia => {
        this.noticia = noticia;
        this.url = noticia.url;
      });
    }

  }

}
