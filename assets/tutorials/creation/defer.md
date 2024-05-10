```typescript
import { defer } from "rxjs";

const deferredObservable = defer(() => {
  console.log("Creating Observable");
  return of("Deferred value");
});

deferredObservable.subscribe((value) => {
  console.log("Received value:", value);
});
```
