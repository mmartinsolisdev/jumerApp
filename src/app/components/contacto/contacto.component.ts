import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../_animations/fadeInAnimation';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
  }

}
