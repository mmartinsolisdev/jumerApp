import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Se necesita para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';
// Necesario para el uso de Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// Necsario para importar la configuracion de firebase
import { environment } from '../environments/environment';
// Importamos los servicios
import { FirebaseService } from './services/firebase.service';
import { NavbarService } from './services/navbar.service';
import { AuthService } from './services/auth.service';
// Importamos el plugin de Frola Editor
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
// Requerido para las animiaciones entre vistas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, animate, transition, style } from '@angular/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NoticiaComponent } from './components/noticia/noticia.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'actividades', component: ActividadesComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'noticia/:id', component: NoticiaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ActividadesComponent,
    GaleriaComponent,
    ContactoComponent,
    AdministradorComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    NoticiaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService, AngularFireDatabaseModule, NavbarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }