import { trigger, state, animate, transition, style } from '@angular/animations';


export function routerTransition() {
    return fadeInAnimation();
  }
/*export const fadeInAnimation =
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('fadeInAnimation', [

       // route 'enter' transition
       transition(':enter', [

           // css styles at start of transition
           style({ opacity: 0 }),

           // animation and styles at end of transition
           animate('.3s', style({ opacity: 1 }))
       ]),
   ]);*/
   function fadeInAnimation() {
    return trigger('routerTransition', [
      transition(':enter', [
         // css styles at start of transition
         style({ opacity: 0 }),
         animate('.30s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        // animation and styles at end of transition
        style({ opacity: 0 }),
        animate('.30s', style({ opacity: 1 }))
      ])
    ]);
  }

   /*function slideToLeft() {
    return trigger('routerTransition', [
      state('void', style({position:'fixed', width:'100%'}) ),
      state('*', style({position:'fixed', width:'100%'}) ),
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
    ]);
  }*/
