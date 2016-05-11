import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from "@angular/router";
import {Talks} from "./Talks/Talks";
import {Talk} from "./Talk/Talk";

@Component({
    selector: 'my-app',
    template: `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/', component: Talks},
    {path: '/talks', component: Talk}
])
export class App {

    constructor() {
    }

}

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);