## Différences : 2-useCompo > 3-httpService

### app.ts

new import :

```typescript
import {Http, HTTP_PROVIDERS, Response} from "@angular/http";
```

before :

```typescript
talks: Array<TalkModel> = [{...}]
```

after :

```typescript
constructor(private http: Http) {
    this.http.get('assets/talks.json').subscribe((response: Response) => this.talks = response.json());
}

bootstrap(App, [HTTP_PROVIDERS]);
```

> Data moved in `assets/talks.json`
