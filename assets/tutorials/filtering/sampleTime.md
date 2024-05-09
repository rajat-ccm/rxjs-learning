```typescript
import { interval } from "rxjs";
import { sampleTime } from "rxjs/operators";

const source$ = interval(500);
const sample$ = source$.pipe(sampleTime(2000));
sample$.subscribe(console.log);

// Output: Logs a value approximately every 2000ms.
```
