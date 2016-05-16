import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

export interface EventModel {
    id: number,
    title:string,
    date:number,
    capacity:number,
    description:string,
    location:string,
    open: boolean,
    registrationurl:string,
    speakers:Array<any>,
    talks:Array<any>
}

@Component({
    selector: 'event',
    template: `
    <div class="event">
        <a class="event-link" [routerLink]="['/events', event.id]"><h1 class="event-title">{{event.title}}</h1></a>
        <p class="event-description">{{event.description}}</p>
        <a *ngIf="event.open" class="event-registrationUrl" [href]="event.registrationurl">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <span>Inscription</span>
            <span>Le {{event.date | date}}</span>
        </a>
    </div>`,
    styleUrls: ['Event/Event.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class Event {
    @Input() event: EventModel;
}