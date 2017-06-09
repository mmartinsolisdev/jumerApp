import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Se necesita para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';

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


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'actividades', component:ActividadesComponent},
  {path:'galeria', component:GaleriaComponent},
  {path:'contacto', component:ContactoComponent},
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
    EditarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
