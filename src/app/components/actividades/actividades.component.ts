import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
  }

}
