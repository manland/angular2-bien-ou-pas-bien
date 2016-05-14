import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {TalkModel} from "./Talk/Talk";
import {Subject} from "rxjs/Subject";

export abstract class Server {
    abstract getTalks(): Observable<TalkModel>;
}

@Injectable()
export class ServerRest extends Server {

    private talks: Array<TalkModel>;

    constructor(private http: Http) {
        super();
        console.log('NEW SERVER');
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

    private get(url: string): Observable<any> {
        return this.http.get(url).map((response: Response) => response.json());
    }

}

export const SERVER_PROVIDERS: Array<any> =  [{ provide: Server, useClass: ServerRest }];