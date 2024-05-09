```typescript
import { of } from "rxjs";
import { elementAt } from "rxjs/operators";

const numbers$ = of(10, 20, 30, 40);
const result$ = numbers$.pipe(elementAt(2));
result$.subscribe(console.log);

// Output:
// 30
```
