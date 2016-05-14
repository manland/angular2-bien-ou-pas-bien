## Différences : 8-firstTest > 8.1-testDi

### Talks/Talks.spec.ts

> Création

### unit-tests.html

> Add

```javascript
'Talks/Talks.spec': {
    deps: ['zone-async-test', 'zone-fake-async-test']
}

Promise.all([System.import('Server.spec'), System.import('Talks/Talks.spec')])
```