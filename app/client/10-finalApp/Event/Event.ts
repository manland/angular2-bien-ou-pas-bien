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
        <a [routerLink]="['/events', event.id]"><h1 class="event-title">{{event.title}}</h1></a>
        <p class="event-description">{{event.description}}</p>
        <a [ngClass]="{'event-registrationUrl': true, 'event-registrationUrl-disable': !event.open}" [href]="event.registrationurl">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            <span>Register</span>
            <span>Le {{event.date | date}}</span>
        </a>
    </div>`,
    styleUrls: ['Event/Event.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class Event {
    @Input() event: EventModel;
}