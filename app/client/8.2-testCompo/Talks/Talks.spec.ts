import {beforeEachProviders, inject, async, it, describe} from "@angular/core/testing";
import {TestComponentBuilder, ComponentFixture} from "@angular/compiler/testing";
import {Server} from "../Server";
import {Observable} from "rxjs/Observable";
import {TalkModel} from "../Talk/Talk";
import {Talks} from "../Talks/Talks";
import "rxjs/add/observable/of";

const fakeTalks = [{id: 0, speaker: {avatar: 'avatar'}, title: 'title', description: 'description'}];

export class FakeServer implements Server {

    getTalks(): Observable<TalkModel> {
        return Observable.of(...fakeTalks);
    }

    saveTalk(): Promise<TalkModel> {
        throw new Error('Server.saveTalk() called');
    }
}

describe('Talks/Talks.spec', () => {

    beforeEachProviders(() => [
        [{ provide: Server, useClass: FakeServer }]
    ]);

    it('Load talks', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
        testComponentBuilder.createAsync(Talks).then((talks: ComponentFixture<Talks>) => {
            expect(talks.componentInstance.talks.length).toEqual(fakeTalks.length);
            expect(talks.componentInstance.talks[0]).toEqual(fakeTalks[0]);
        });
    })));

});