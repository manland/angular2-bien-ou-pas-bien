import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Server} from "../Server";
import {UrlValidator} from "./UrlValidator";

export interface TalkModel {
    id: number,
    speaker: {avatar: string},
    title: string,
    description: string
}

@Component({
    selector: 'talk',
    template: `
    <form class="talk" (ngSubmit)="onSubmit()" #talkForm="ngForm">

        <div class="form-group">
            <label for="avatarUrl">AvatarUrl</label>
            <input type="text" id="avatarUrl" [(ngModel)]="talk.speaker.avatar" ngControl="avatarUrl" #avatarUrl="ngForm" validateUrl required>
            <div [hidden]="(avatarUrl.valid || avatarUrl.pristine) && (!avatarUrl.validateUrl || avatarUrl.validateUrl.valid)" class="talkEdit-errorMessage">
                AvatarUrl need to be a valid url
            </div>
        </div>

        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" [(ngModel)]="talk.title" ngControl="title" #title="ngForm" required>
            <div [hidden]="title.valid || title.pristine" class="talkEdit-errorMessage">
                Title is required
            </div>
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" id="description" [(ngModel)]="talk.description" ngControl="description" #description="ngForm" required>
            <div [hidden]="description.valid || description.pristine" class="talkEdit-errorMessage">
                Description is required
            </div>
        </div>

        <button type="submit" class="btn btn-default" [disabled]="!talkForm.form.valid">Submit</button>
    </form>`,
    directives: [UrlValidator],
    styleUrls: ['TalkEdit/TalkEdit.css']
})
export class TalkEdit {

    private talk: TalkModel = {id: null, speaker: {avatar: ''}, title: '', description: ''};

    constructor(private server: Server, private router: Router) {}

    onSubmit() {
        this.server.saveTalk(this.talk).then((talk: TalkModel) => {
            this.router.navigate(['/talks', talk.id]);
        });
    }

}