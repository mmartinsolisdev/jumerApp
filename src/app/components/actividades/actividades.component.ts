import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../_animations/fadeInAnimation';
import { HostBinding, HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  animations: [routerTransition()],
  host:  { '[@routerTransition]': '' }
})
export class ActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
  }

}
