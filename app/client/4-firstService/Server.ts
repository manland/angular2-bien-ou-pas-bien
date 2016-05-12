import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class Server {

    constructor(private http: Http) {
    }

    get(url: string): Observable<any> {
        return this.http.get(url).map((response: Response) => response.json());
    }

}