```typescript
import { of } from "rxjs";
import { distinctUntilChanged, distinct } from "rxjs/operators";

const source$ = of(1, 1, 2, 2, 2, 1, 3, 3, 1);
source$.pipe(distinct()).subscribe(console.log);

// 1
// 2
// 3
```
