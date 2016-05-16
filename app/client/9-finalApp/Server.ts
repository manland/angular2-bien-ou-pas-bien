import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {TalkModel} from "./Talk/Talk";
import {Subject} from "rxjs/Subject";
import {EventModel} from "./Event/Event";
import "rxjs/add/operator/map";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/toPromise";
import {SpeakerModel} from "./Speaker/Speaker";

const SITE_JUG_URL = 'http://www.jug-montpellier.org';

export abstract class Server {
    abstract getEvents(): Observable<EventModel>;
    abstract getEventDetails(id: string): Promise<EventModel>;
    abstract getSpeaker(id: string): Promise<SpeakerModel>;
}

@Injectable()
export class ServerRest extends Server {

    private events: Array<EventModel>;
    private eventsDetails: {[eventId: string]: EventModel} = {};
    private speakers: {[speakerId: string]: SpeakerModel} = {};

    constructor(private http: Http) {
        super();
    }

    getEvents(): Observable<EventModel> {
        const subject: Subject<EventModel> = Subject.create();
        if(!this.events) {
            Observable.merge(this.get(`${SITE_JUG_URL}/restEvents/upcoming`), this.get(`${SITE_JUG_URL}/restEvents/past`))
                .subscribe((events: Array<EventModel>) => {
                    this.events = this.events || [];
                    this.events = this.events.concat(events);
                    events.forEach((event: EventModel) => subject.next(event));
                });
        } else {
            setTimeout(() => {
                this.events.forEach((event: EventModel) => subject.next(event));
                subject.complete();
            });
        }
        return subject;
    }

    getEventDetails(id: string): Promise<EventModel> {
        if(!this.eventsDetails[id]) {
            return this.get(`${SITE_JUG_URL}/restEvents/${id}`)
                .map((event: EventModel) => {
                    this.eventsDetails[`${event.id}`] = event;
                    event.talks.forEach((talk: TalkModel) => this.speakers[talk.speaker.id] = talk.speaker);
                    return event;
                })
                .toPromise();
        } else {
            return Promise.resolve(this.eventsDetails[id]);
        }
    }

    getSpeaker(id: string): Promise<SpeakerModel> {
        return Promise.resolve(this.speakers[id]);
    }

    private get(url: string): Observable<any> {
        return this.http.get(url).map((response: Response) => response.json());
    }

}

export const SERVER_PROVIDERS: Array<any> =  [{ provide: Server, useClass: ServerRest }];