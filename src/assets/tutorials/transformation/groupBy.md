```typescript
const userEvents = [
  { userId: 1, event: "click" },
  { userId: 2, event: "hover" },
  { userId: 1, event: "scroll" },
  { userId: 2, event: "click" },
];

from(userEvents)
  .pipe(
    groupBy((event) => event.userId),
    mergeMap((group) =>
      group.pipe(map((event) => `${group.key}: ${event.event}`))
    )
  )
  .subscribe(console.log);

// 1: click
// 2: hover
// 1: scroll
// 2: click
```
