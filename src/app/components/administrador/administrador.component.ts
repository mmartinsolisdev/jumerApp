import { Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(public nav: NavbarService) { 
  //  this.obtener();
  // this.pathad = this._router.url;
  // console.log(this.pathad);
  }

  ngOnInit() {
    this.nav.hide();
  }

}
