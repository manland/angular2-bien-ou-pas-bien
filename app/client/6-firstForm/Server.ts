import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {TalkModel} from "./Talk/Talk";
import {Subject} from "rxjs/Subject";
import {SubjectSubscription} from "rxjs/SubjectSubscription";

export abstract class Server {
    abstract getTalks(): Observable<TalkModel>;
    abstract saveTalk(talk: TalkModel): Promise<TalkModel>;
}

@Injectable()
export class ServerRest extends Server {

    private talks: Array<TalkModel>;

    constructor(private http: Http) {
        super();
    }

    getTalks(): Observable<TalkModel> {
        const subject: Subject<TalkModel> = Subject.create();
        if(!this.talks) {
            this.get('assets/talks.json').subscribe((talks: Array<TalkModel>) => {
                this.talks = talks;
                talks.forEach((talk: TalkModel) => subject.next(talk));
                subject.complete();
            });
        } else {
            setTimeout(() => {
                this.talks.forEach((talk: TalkModel) => subject.next(talk));
                subject.complete();
            });
        }
        return subject;
    }

    saveTalk(talk:TalkModel):Promise<TalkModel> {
        return new Promise((complete: (talk: TalkModel) => any) => {
            const newTalk = {id: this.talks.length, speaker: {avatar: talk.speaker.avatar}, title: talk.title, description: talk.description};
            this.talks.push(newTalk);
            complete(newTalk);
        });
    }

    private get(url: string): Observable<any> {
        return this.http.get(url).map((response: Response) => response.json());
    }

}

export const SERVER_PROVIDERS: Array<any> =  [{ provide: Server, useClass: ServerRest }];