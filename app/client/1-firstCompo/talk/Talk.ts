import {Component} from "@angular/core";

interface TalkModel {
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

    talk: TalkModel = {
        speaker: {avatar: 'http://www.gravatar.com/avatar/c6b552a4cd47f7cf1701ea5b650cd2e3'},
        title: 'AngularJS 2 : bien ou pas bien?',
        description: `Alors que Google nous dévoile sa nouvelle mouture d'Angular, je vous propose de découvrir quelques un de ses nouveaux concepts et ainsi de vous faire une idée par vous même. Devez-vous migrer votre application ? Devez-vous commencer une nouvelle application avec Angular2 ? Où en est le fameux duel React vs Angular ? Venez trouver une partie des réponses à ces questions.`
    }

}