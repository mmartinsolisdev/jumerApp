import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../_animations/fadeInAnimation';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
  // make fade in animation available to this component
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Regresa el Scroll al top al momento de cambiar de ruta
    window.scrollTo(0, 0)
  }

}
