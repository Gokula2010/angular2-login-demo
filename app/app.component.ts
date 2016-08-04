import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
       <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})

export class AppComponent  implements OnInit {
    constructor() { }

    ngOnInit() { }


    routerOnActive
}