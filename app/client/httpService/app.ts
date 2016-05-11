import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Talk, TalkModel} from "./talk/Talk";
import {Http, HTTP_PROVIDERS, Response} from "@angular/http";

@Component({
    selector: 'my-app',
    template: `<talk *ngFor="let talk of talks" [talk]="talk"></talk>`,
    directives: [Talk]
})
export class App {

    talks: Array<TalkModel> = [];

    constructor(private http: Http) {
        this.http.get('assets/talks.json').subscribe((response: Response) => this.talks = response.json());
    }

}


bootstrap(App, [HTTP_PROVIDERS]);