import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Talk, TalkModel} from "./Talk/Talk";
import {HTTP_PROVIDERS} from "@angular/http";
import {Server} from "./Server";

@Component({
    selector: 'my-app',
    template: `<talk *ngFor="let talk of talks" [talk]="talk"></talk>`,
    directives: [Talk],
    providers: [Server]
})
export class App {

    talks: Array<TalkModel> = [];

    constructor(private server: Server) {
        server.get('assets/talks.json').subscribe((talks: Array<TalkModel>) => this.talks = talks);
    }

}


bootstrap(App, [HTTP_PROVIDERS]);