import 'reflect-metadata';

import {Inject, Injectable} from "@angular/core";
import {Application, start} from "./annotation/Service";
import {StaticServer} from "./service/StaticServer";

@Injectable()
export class App implements Application {

    constructor(private staticServer: StaticServer) {
    }

    start() {
        this.staticServer.start();
    }
}

start(App);