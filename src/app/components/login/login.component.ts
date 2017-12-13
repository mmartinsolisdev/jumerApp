import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from '../../_animations/fadeInAnimation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public nav: NavbarService, private AuthServ:AuthService, private router:Router, private formBuilder:FormBuilder) { 
      this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
   });
  }

  ngOnInit() {
    this.nav.hide();
  }

  loginWithGoogle(){
      this.AuthServ.loginWithGoogle();
  }

  login(){
    const inputValue = this.form.value;
    //Pasamos parametros al servicio de autenticacion de firebase
    this.AuthServ.login(inputValue.email, inputValue.password)
    .subscribe(
      success => this.router.navigate(['/administrador']),
      error => alert(error)
      
    )

    
  }

}