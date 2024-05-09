```typescript
import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

const source$ = interval(1000);
const timer$ = timer(5000);
const result$ = source$.pipe(takeUntil(timer$));
result$.subscribe(console.log);

// Output:
// 0
// 1
// 2
// 3
```
