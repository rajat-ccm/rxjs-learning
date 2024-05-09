```typescript
import { of } from "rxjs";
import { filter } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5);
const filtered$ = source$.pipe(filter((x) => x % 2 === 0));
filtered$.subscribe((x) => console.log(x));

// Output:
// 2
// 4
```
