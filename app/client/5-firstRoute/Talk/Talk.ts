import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

export interface TalkModel {
    id: number,
    speaker: {avatar: string},
    title: string,
    description: string
}

@Component({
    selector: 'talk',
    template: `
    <div class="talk">
        <img class="talk-speakerAvatar" [src]="talk.speaker.avatar">
        <a [routerLink]="['/talks', talk.id]"><h1 class="talk-title">{{talk.title}}</h1></a>
        <p class="talk-description">{{talk.description}}</p>
    </div>`,
    styleUrls: ['Talk/Talk.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class Talk {

    @Input() talk: TalkModel;

}