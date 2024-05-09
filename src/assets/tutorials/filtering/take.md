```typescript
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const numbers$ = interval(1000);
const firstThree$ = numbers$.pipe(take(3));
firstThree$.subscribe(console.log);

// Output:
// 0
// 1
// 2
```
