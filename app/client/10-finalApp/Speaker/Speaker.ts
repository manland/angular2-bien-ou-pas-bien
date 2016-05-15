import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteSegment, OnActivate} from "@angular/router";
import {Server} from "../Server";

export interface SpeakerModel {
    id: number,
    fullname: string,
    photourl: string
    activity: string,
    company: string,
    description: string,
    url: string,
    personalurl: string
}

@Component({
    selector: 'speaker',
    template: `
    <div class="speaker" *ngIf="speaker">
        <img class="speaker-photourl" [src]="speaker.photourl">
        <div>
            <h1 class="speaker-fullname">{{speaker.fullname}} est {{speaker.activity}} chez <a [href]="speaker.url">{{speaker.company}}</a></h1>
            <p class="speaker-description">{{speaker.description}}</p>
        </div>
    </div>`,
    styleUrls: ['Speaker/Speaker.css']
})
export class Speaker implements OnActivate {

    speaker: SpeakerModel;

    constructor(private server: Server) {
    }

    routerOnActivate(routeParams: RouteSegment): void {
        let id: string = routeParams.getParam("id");
        this.server.getSpeaker(id).then((speaker: SpeakerModel) => {
            this.speaker = speaker;
        });
    }

}