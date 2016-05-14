## Différences : 4.1-firstServiceInterface > 5-firstRoute

### Talks/Talks.ts

> Création (old app.ts)

### TalkDetails/TalkDetails.ts

> Création (wrapper Talk.ts)

### app.ts

after :

```typescript
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from "@angular/router";
import {Talks} from "./Talks/Talks";
import {TalkDetails} from "./TalkDetails/TalkDetails";

template: `<a [routerLink]="['/']"></a><router-outlet></router-outlet>`
directives: [ROUTER_DIRECTIVES]

@Routes([
     {path: '/', component: Talks},
     {path: '/talks/:id', component: TalkDetails}
])

bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
```

### assets/talks.json

> Add id

### Talk/Talk.ts

before :

```typescript
<h1 class="talk-title">{{talk.title}}</h1>
```

after :

```typescript
<a [routerLink]="['/talks', talk.id]"><h1 class="talk-title">{{talk.title}}</h1></a>
```

### index.html

> Add `<base href="/5-firstRoute/" />`

### Server.ts

before:

```typescript
public get(url: string): Observable<any> {}
```

after:

```typescript
public getTalks(): Observable<TalkModel> {}
```