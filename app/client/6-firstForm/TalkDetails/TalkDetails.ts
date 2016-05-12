import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES, OnActivate, RouteSegment} from "@angular/router";
import {TalkModel, Talk} from "../Talk/Talk";
import "rxjs/add/operator/filter";
import {Server} from "../Server";

@Component({
    selector: 'talk-details',
    template: `<div *ngIf="talk"><talk [talk]="talk"></talk></div>`,
    directives: [Talk],
    styleUrls: ['Talk/Talk.css']
})
export class TalkDetails implements OnActivate {

    talk: TalkModel;

    constructor(private server: Server) {
    }

    routerOnActivate(routeParams: RouteSegment): void {
        let id: string = routeParams.getParam("id");
        this.server.getTalks()
            .filter((talk: TalkModel) => `${talk.id}` === `${id}`)
            .subscribe((talk: TalkModel) => this.talk = talk);
    }
}