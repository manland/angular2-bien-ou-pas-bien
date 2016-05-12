import {Component, Input} from "@angular/core";

export interface TalkModel {
    speaker: {avatar: string},
    title: string,
    description: string
}

@Component({
    selector: 'talk',
    template: `
    <div class="talk">
        <img class="talk-speakerAvatar" [src]="talk.speaker.avatar">   
        <h1 class="talk-title">{{talk.title}}</h1>
        <p class="talk-description">{{talk.description}}</p>
    </div>`,
    styleUrls: ['talk/Talk.css']
})
export class Talk {

    @Input() talk: TalkModel;

}