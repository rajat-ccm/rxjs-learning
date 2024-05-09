```typescript
import { of } from "rxjs";
import { skipWhile } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
const result$ = numbers$.pipe(skipWhile((x) => x < 3));
result$.subscribe(console.log);

// Output:
// 3
// 4
// 5
```
