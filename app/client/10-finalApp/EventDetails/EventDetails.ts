import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES, OnActivate, RouteSegment} from "@angular/router";
import {EventModel, Event} from "../Event/Event";
import "rxjs/add/operator/filter";
import {Server} from "../Server";
import {Talk} from "../Talk/Talk";

@Component({
    selector: 'talk-details',
    template: `
        <div *ngIf="event">
            <event [event]="event"></event>
            <talk *ngFor="let talk of event.talks" [talk]="talk"></talk>
        </div>
    `,
    directives: [Event, Talk],
    styleUrls: ['Talk/Talk.css']
})
export class EventDetails implements OnActivate {

    event: EventModel;

    constructor(private server: Server) {
    }

    routerOnActivate(routeParams: RouteSegment): void {
        let id: string = routeParams.getParam("id");
        this.server.getEventDetails(id).then((event: EventModel) => {
            this.event = event;
        });
    }
}