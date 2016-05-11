import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Talk, TalkModel} from "../../firstService/talk/Talk";
import {Server} from "../Server";

@Component({
    template: `<a [routerLink]="['/talks']">TALK</a><talk *ngFor="let talk of talks" [talk]="talk"></talk>`,
    directives: [Talk, ROUTER_DIRECTIVES]
})
export class Talks {

    talks: Array<TalkModel> = [];

    constructor(private server: Server) {
        this.server.get('assets/talks.json').subscribe((talks: Array<TalkModel>) => this.talks = talks);
    }

}