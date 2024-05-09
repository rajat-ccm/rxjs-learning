```typescript
import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";

const timer$ = interval(1000);
const clicks$ = fromEvent(document, "click");
const result$ = timer$.pipe(sample(clicks$));
result$.subscribe(console.log);

// Output: Logs the last interval value at the moment of each click.
```
