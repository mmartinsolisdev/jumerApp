import { Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

    public isLoggedIn: boolean;

    constructor(public nav: NavbarService, private authService: AuthService, private router: Router) {
      authService.isAuthenticated().subscribe(
        success => this.isLoggedIn = success
        
      );
      
    
    }

    ngOnInit() {
      this.nav.hide();
    }

    logout(){
      this.authService.logout();
      this.router.navigate(['/login']);      
    }

}
