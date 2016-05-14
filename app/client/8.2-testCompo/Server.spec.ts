import {ServerRest} from './Server';
import {TalkModel} from "./Talk/Talk";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import "rxjs/add/operator/toArray";

const fakeTalks = [{id: 0, speaker: {avatar: 'avatar'}, title: 'title', description: 'description'}];

const fakeHttp: any = {
    get: (): Observable<any> => Observable.create((observer:Observer<any>) => {
        setTimeout(() => {//mimic network latency
            observer.next({json: () => fakeTalks});
            observer.complete();
        });
    })
};

describe('1st tests', () => {

    it('Server return talks', (onDone: ()=>void) => {
        const server: ServerRest = new ServerRest(fakeHttp);
        server.getTalks().subscribe((talk: TalkModel) => {
            expect(talk).toEqual(fakeTalks[0]);
            onDone();
        });
    });

    it('Server save talk', (onDone: ()=>void) => {
        const server: ServerRest = new ServerRest(fakeHttp);
        const fakeTalkNew = {id: -1, speaker: {avatar: 'avatar2'}, title: 'title2', description: 'description2'};
        server.getTalks().subscribe(() => {//initialise array of talks
            server.saveTalk(fakeTalkNew).then(() => {
                server.getTalks().toArray().subscribe((talks: Array<TalkModel>) => {
                    expect(talks.length).toEqual(2);
                    expect(talks[0]).toEqual(fakeTalks[0]);
                    fakeTalkNew.id = 1;//id updated by server
                    expect(talks[1]).toEqual(fakeTalkNew);
                    onDone();
                });
            });
        });
    });

});