```typescript
import { of } from "rxjs";
import { first, last, single } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5);
source$.pipe(first()).subscribe(console.log); // Output: 1
source$.pipe(last()).subscribe(console.log); // Output: 5
source$.pipe(single((x) => x === 3)).subscribe(console.log); // Output: 3
```
