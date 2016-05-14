## Différences : 1-firstCompo > 2-useCompo

### Talk/Talk.ts

before :

```typescript
talk: TalkModel = {...};
```

after :

```typescript
@Input() talk: TalkModel;
```

### app.ts

before :

```typescript
template: `<Talk></Talk>`
```

after :

```typescript
template: <talk *ngFor="let talk of talks" [talk]="talk"></talk>

talks: Array<TalkModel> = [{...}]
```