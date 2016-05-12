import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from "@angular/router";
import {Talks} from "./Talks/Talks";
import {TalkDetails} from "./TalkDetails/TalkDetails";
import {TalkEdit} from "./TalkEdit/TalkEdit";
import {SERVER_PROVIDERS} from "./Server";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <a [routerLink]="['/']">Home</a> - <a [routerLink]="['/edit']">Add</a>
        </header>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/', component: Talks},
    {path: '/talks/:id', component: TalkDetails},
    {path: '/edit', component: TalkEdit}
])
export class App {

    constructor() {
    }

}

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, SERVER_PROVIDERS]);