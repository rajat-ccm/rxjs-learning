```typescript
import { of } from "rxjs";
import { skipLast } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
const result$ = numbers$.pipe(skipLast(2));
result$.subscribe(console.log);

// Output:
// 1
// 2
// 3
```
