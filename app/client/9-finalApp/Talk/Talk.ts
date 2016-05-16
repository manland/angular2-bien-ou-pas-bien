import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {SpeakerModel} from "../Speaker/Speaker";

export interface TalkModel {
    id: number,
    speaker: SpeakerModel,
    title: string,
    teaser: string
}

@Component({
    selector: 'talk',
    template: `
    <div class="talk">
        <div class="talk-speaker-container">
            <img class="talk-speaker-photourl" [src]="talk.speaker.photourl" />
            <a class="talk-speaker-fullname" [routerLink]="['/speakers', talk.speaker.id]">{{talk.speaker.fullname}}</a>
        </div>
        <div class="talk-details-container">
            <h1 class="talk-title">{{talk.title}}</h1>
            <p class="talk-description">{{talk.teaser}}</p>
        </div>
    </div>`,
    styleUrls: ['Talk/Talk.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class Talk {

    @Input() talk: TalkModel;

}