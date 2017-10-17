import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
  }

}
