import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        // styling the layout for the transition
        style({
          position: "relative",
          overflow: "hidden"
        }),

        // to deal with the components stacking above each other
        query(":enter, :leave", [
          style({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          })
        ], {optional: true}),

        /**
         * he group property group the animations of the component together 
         * so that the fade out and in at thesame time
         */
        group([
          // styling the leaving component
          query(':leave', [
            animate("200ms ease-in", style({
              opacity: 0,
              transform: 'translateX(-50px)'
            }))
          ], {optional: true}),
  
          // styling the entry component
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(50px)'
            }),
            animate('120ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], {optional: true})
        ])
      ]
      ),
      transition(':decrement', [
        // styling the layout for the transition
        style({
          position: "relative",
          overflow: "hidden"
        }),

        // to deal with the components stacking above each other
        query(":enter, :leave", [
          style({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          })
        ], {optional: true}),

        /**
         * he group property group the animations of the component together 
         * so that the fade out and in at thesame time
         */
        group([
          // styling the leaving component
          query(':leave', [
            animate("200ms ease-in", style({
              opacity: 0,
              transform: 'translateX(50px)'
            }))
          ], {optional: true}),
  
          // styling the entry component
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(-50px)'
            }),
            animate('120ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))
          ], {optional: true})
        ])
      ]
      )
    ])
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) return outlet.activatedRouteData["tab"]
  }

}
