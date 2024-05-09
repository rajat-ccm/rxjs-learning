```typescript
import { of } from "rxjs";
import { tap } from "rxjs/operators";

const source = of(1, 2, 3, 4, 5);

source.pipe(tap((value) => console.log("Value:", value))).subscribe();

// Value: 1
// Value: 2
// Value: 3
// Value: 4
// Value: 5
```
