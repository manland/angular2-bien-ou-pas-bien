import {Component} from "@angular/core";
import {Event, EventModel} from "../Event/Event";
import {Server} from "../Server";

@Component({
    template: `<event *ngFor="let event of events" [event]="event"></event>`,
    directives: [Event]
})
export class Events {

    events: Array<EventModel> = [];

    constructor(private server: Server) {
        this.server.getEvents().subscribe((event: EventModel) => {
            this.events.push(event);
            this.events.sort((event1: EventModel, event2: EventModel): number => {
                return event2.date - event1.date;
            });
        });
    }

}