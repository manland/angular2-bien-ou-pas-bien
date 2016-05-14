## Différences : 4-firstService > 4.1-firstServiceInterface

### Server.ts

before :

```typescript
class Server {

}
```

after :

```typescript
export abstract class Server {}
export class ServerRest extends Server {}
export const SERVER_PROVIDERS: Array<any> =  [{ provide: Server, useClass: ServerRest }];
```

### app.ts

before :

```typescript
import {Server} from "./Server";

providers: [Server]
```

after :

```typescript
import {Server, SERVER_PROVIDERS} from "./Server";

providers: [SERVER_PROVIDERS]
```
