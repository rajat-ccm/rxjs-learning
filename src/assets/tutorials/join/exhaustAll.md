```typescript
import { interval, of } from "rxjs";
import { take, map, exhaustAll } from "rxjs/operators";

const source = interval(1000).pipe(take(2));
const higherOrder = source.pipe(
  map((val) => of(val, val + 1).pipe(delay(1000)))
);

const example = higherOrder.pipe(exhaustAll());
example.subscribe(console.log);

// Output:
// 0 (after 2s)
// 1 (after 3s)
```
