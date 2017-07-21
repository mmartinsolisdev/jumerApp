import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  exists = true;
  path: string;
  location: any;

  constructor(){
  //// this.toggleExists();
  //  router.routerState.snapshot.url;
   // console.log(this.path);
   //_router.events.subscribe((data) => { this.location = data; });
    //console.log(activeR.snapshot.url);
    //_router.events.subscribe((data:any) => { this.location = data.url; });
    //

   //console.log(this.ObtenerRuta());
    //console.log(this._router.url);
     //console.warn(this.location);
   //console.log(_router.routerState.root.snapshot);
   //console.log(this.administradorComponent.pathad);
  // this.administrador.obtener();
   //console.log(this.administrador.obtener());
    }
  //getRutaAd(){
  //this.path = this.administradorComponent.ngOnInit();
  //}
  /*toggleExists() {
    //this.exists = !this.exists;
    console.log(this.exists);
    //this.path = this.router.url;
    console.log(this.path);
}*/

}