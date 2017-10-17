import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
  }

}
