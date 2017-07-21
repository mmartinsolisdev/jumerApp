import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias:any;
  

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getNoticias().subscribe(noticias => {
      console.log(noticias);
      this.noticias = noticias;
    });
    
    
  }



  

}
