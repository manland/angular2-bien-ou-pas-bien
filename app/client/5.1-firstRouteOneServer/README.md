## Différences : 5-firstRoute > 5.1-firstRouteOneServer

### app.ts

before:

```typescript
bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
```

after:

```typescript
bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS, SERVER_PROVIDERS]);
```

### TalkDetails/TalkDetails.ts

> Remove SERVER_PROVIDERS

### Talks/Talks.ts

> Remove SERVER_PROVIDERS
