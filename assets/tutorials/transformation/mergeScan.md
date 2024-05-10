```typescript
import { from } from "rxjs";
import { mergeScan, scan } from "rxjs/operators";

// Example: Tracking cumulative total and emitting only positive values
const numbers = from([-1, 2, -3, 4, -5]);

numbers
  .pipe(
    mergeScan((acc, val) => {
      const total = acc + val;
      return total >= 0 ? from([total]) : from([]);
    }, 0)
  )
  .subscribe((result) => console.log(result));

// 2
// 6
```
