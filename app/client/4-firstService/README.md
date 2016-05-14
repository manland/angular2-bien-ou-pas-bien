## Différences : 3-httpService > 4-firstService

### Server.ts

> Création

### app.ts

before :

```typescript
import {Http, HTTP_PROVIDERS, Response} from "@angular/http";

constructor(private http: Http) {
    this.http.get('assets/talks.json').subscribe((response: Response) => this.talks = response.json());
}
```

after :

```typescript
import {HTTP_PROVIDERS} from "@angular/http";
import {Server} from "./Server";

providers: [Server]

constructor(private server: Server) {
    server.get('assets/talks.json').subscribe((talks: Array<TalkModel>) => this.talks = talks);
}
```