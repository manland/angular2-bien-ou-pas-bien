import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

export abstract class Server {
    abstract get(url: string): Observable<any>;
}

@Injectable()
export class ServerRest extends Server {

    constructor(private http: Http) {
        super();
    }

    get(url: string): Observable<any> {
        return this.http.get(url).map((response: Response) => response.json());
    }

}

export const SERVER_PROVIDERS: Array<any> =  [{ provide: Server, useClass: ServerRest }];