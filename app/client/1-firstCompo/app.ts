import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Talk} from "./Talk/Talk";

@Component({
    selector: 'my-app',
    template: `<talk></talk>`,
    directives: [Talk]
})
export class App {

    constructor() {
    }

}


bootstrap(App, []);