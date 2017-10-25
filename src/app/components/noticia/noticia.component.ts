import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  id: string;
  noticia: {};
  url: string;
  public noticias:any[];
  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.firebaseService.getNoticia(this.id).subscribe(noticia => {
      this.noticia = noticia;
      this.url = noticia.url;
      console.log(this.noticia);

    });
    this.firebaseService.getNoticias().subscribe(noticias=> {
      this.noticias = noticias;
      console.log(noticias);
      //this.noticias = Array(5).fill(4);
    });
  }

}
