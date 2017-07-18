import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Se necesita para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';
//Necesario para el uso de Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
//Necsario para importar la configuracion de firebase
import { environment } from '../environments/environment';
//Importamos los servicios
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddNoticiaComponent } from './components/add-noticia/add-noticia.component';
import { EditarNoticiaComponent } from './components/editar-noticia/editar-noticia.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'actividades', component:ActividadesComponent},
  {path:'galeria', component:GaleriaComponent},
  {path:'contacto', component:ContactoComponent},     
  {path:'administrador', component:AdministradorComponent},
  {path: '**', component:HomeComponent }
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
    AddNoticiaComponent,
    EditarNoticiaComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'jumerApp'),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService, AngularFireDatabaseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
