```typescript
import { interval, timer } from "rxjs";
import { skipUntil } from "rxjs/operators";

const source$ = interval(1000);
const timer$ = timer(5000);
const result$ = source$.pipe(skipUntil(timer$));
result$.subscribe(console.log);

// Output: Starts logging values after 5 seconds.
```
