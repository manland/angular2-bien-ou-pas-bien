import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/observable/from";
import {TalkModel} from "./Talk/Talk";
import {Subject} from "rxjs/Subject";
import {SubjectSubscription} from "rxjs/SubjectSubscription";

@Injectable()
export class Server {

    private talks: Subject<TalkModel>;

    constructor(private http: Http) {

    }

    getTalks(): Observable<TalkModel> {
        if(!this.talks) {
            this.talks = Subject.create();
            this.get('assets/talks.json').subscribe((talks: Array<TalkModel>) => {
                talks.forEach((talk: TalkModel) => this.talks.next(talk));
            });
        }
        return this.talks;
    }

    private get(url: string): Observable<any> {
        return this.http.get(url).map((response: Response) => response.json());
    }

}