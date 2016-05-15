import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from "@angular/router";
import {Events} from "./Events/Events";
import {EventDetails} from "./EventDetails/EventDetails";
import {SERVER_PROVIDERS} from "./Server";
import {Speaker} from "./Speaker/Speaker";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <a [routerLink]="['/']"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
        </header>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/', component: Events},
    {path: '/events/:id', component: EventDetails},
    {path: '/speakers/:id', component: Speaker}
])
export class App {

    constructor() {
    }

}

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, SERVER_PROVIDERS]);