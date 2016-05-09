import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app.html'//relative to app/client
})
export class App {

    constructor() {

    }

}

bootstrap(App, []);