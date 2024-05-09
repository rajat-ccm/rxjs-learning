```typescript
import { of } from "rxjs";
import { skip } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
const skipped$ = numbers$.pipe(skip(2));
skipped$.subscribe(console.log);

// Output:
// 3
// 4
// 5
```
