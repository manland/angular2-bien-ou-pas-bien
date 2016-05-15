import {beforeEachProviders, inject, async, it, describe, setBaseTestProviders} from '@angular/core/testing';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} from '@angular/platform-browser-dynamic/testing';
import {ROUTER_FAKE_PROVIDERS} from '@angular/router/testing';
import {Server} from "../Server";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {TalkModel, Talk} from "../Talk/Talk";
import 'rxjs/add/observable/of';

const fakeTalk = {id: 0, speaker: {avatar: '../0-theory/assets/moi.jpg'}, title: 'title', description: 'description'};

describe('Talk/Talk.spec', () => {

    it('Display talk', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
        testComponentBuilder
            .overrideProviders(Talk, [ROUTER_FAKE_PROVIDERS])
            .createAsync(Talk).then((talk: ComponentFixture<Talk>) => {
                talk.componentInstance.talk = fakeTalk;
                talk.detectChanges();
                talk.whenStable().then(() => {
                    const avatar = talk.nativeElement.querySelector('.talk .talk-speakerAvatar').getAttribute('src');
                    expect(avatar).toEqual(fakeTalk.speaker.avatar);
                    talk.destroy();
                });
            });
    })));

});