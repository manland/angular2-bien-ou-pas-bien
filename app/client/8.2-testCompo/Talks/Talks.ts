import {Component} from "@angular/core";
import {Talk, TalkModel} from "../Talk/Talk";
import {Server} from "../Server";

@Component({
    template: `<talk *ngFor="let talk of talks" [talk]="talk"></talk>`,
    directives: [Talk]
})
export class Talks {

    talks: Array<TalkModel> = [];

    constructor(private server: Server) {
        this.server.getTalks().subscribe((talk: TalkModel) => this.talks.push(talk));
    }

}