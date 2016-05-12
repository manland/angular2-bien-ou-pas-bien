import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component, ElementRef, ViewChild, HostListener} from "@angular/core";
import {Http, HTTP_PROVIDERS, Response} from "@angular/http";

@Component({
    selector: 'my-app',
    template: `
        <div class="slideContainer" #slide (keypress)="eventHandler($event)"></div>
        <footer>
            <span class="github"><i class="fa fa-github-alt" aria-hidden="true"></i><a href="https://github.com/manland/angular2-bien-ou-pas-bien">manland/angular2-bien-ou-pas-bien</a></span>
            <span class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i><a href="https://twitter.com/RmManeschi">@RmManeschi</a></span>
            <span class="slideIndex">{{currentSlideIndex}}/{{ID_SLIDE_MAX}}</span>
        </footer>
    `
})
export class App {

    private ID_SLIDE_MIN: number = 0;
    private ID_SLIDE_MAX: number = 31;

    @ViewChild('slide', true)
    slide: ElementRef;

    private currentSlideIndex: number;

    constructor(private http: Http) {
        const slideNb = window.location.hash.substr(1);//TODO replace this hack by adding router
        this.currentSlideIndex = this.ID_SLIDE_MIN;
        if(slideNb) {
            try {
                this.currentSlideIndex = parseInt(slideNb, 10);
            } catch(e) {}
        }
        this.display();
    }

    display() {
        this.http.get(`slides/slide${this.currentSlideIndex}.html`).subscribe((response: Response) => this.slide.nativeElement.innerHTML = response.text());
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: any) {
        let currentSlideIndex = this.currentSlideIndex;

        if(event.keyCode === 39) {
            currentSlideIndex++;
        } else if(event.keyCode === 37) {
            currentSlideIndex--;
        }

        if(currentSlideIndex !== this.currentSlideIndex) {
            if (currentSlideIndex < this.ID_SLIDE_MIN) {
                currentSlideIndex = this.ID_SLIDE_MIN;
            } else if (currentSlideIndex > this.ID_SLIDE_MAX) {
                currentSlideIndex = this.ID_SLIDE_MAX;
            }
            this.currentSlideIndex = currentSlideIndex;
            this.display();
            window.location.hash = `${this.currentSlideIndex}`;//TODO replace this hack by adding router
        }
    }


}


bootstrap(App, [HTTP_PROVIDERS]);