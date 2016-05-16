## Différences : 8.1-testDi > 8.2-testCompo

### Talk/Talk.spec.ts

> Création

### unit-tests.html

> Add

```javascript
map: {
    '@angular/*/testing': '@angular/*/testing.js'
}
```

> Refactor

```javascript
Promise.all(toImport)
```

### Talks/Talks.spec.ts

> Refactor avec setBaseTestProviders