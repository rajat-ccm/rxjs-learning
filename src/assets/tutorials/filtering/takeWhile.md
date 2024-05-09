```typescript
import { of } from "rxjs";
import { takeWhile } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
const result$ = numbers$.pipe(takeWhile((x) => x < 4));
result$.subscribe(console.log);

// Output:
// 1
// 2
// 3
```
