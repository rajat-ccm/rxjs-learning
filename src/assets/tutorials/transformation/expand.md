```typescript
import { of } from "rxjs";
import { expand, take } from "rxjs/operators";

// Example: Generating Fibonacci sequence
const fibonacci = of({ a: 0, b: 1 }).pipe(
  expand(({ a, b }) => {
    const next = a + b;
    return of({ a: b, b: next });
  }),
  take(10)
);

fibonacci.subscribe(({ a }) => console.log(a));

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```
