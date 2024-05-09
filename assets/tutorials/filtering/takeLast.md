```typescript
import { of } from "rxjs";
import { takeLast } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);
const lastTwo$ = numbers$.pipe(takeLast(2));
lastTwo$.subscribe(console.log);

// Output:
// 4
// 5
```
