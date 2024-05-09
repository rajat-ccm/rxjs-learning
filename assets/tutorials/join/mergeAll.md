```typescript
import { of, interval } from "rxjs";
import { take, map, mergeAll } from "rxjs/operators";

const source = of(interval(500).pipe(take(3)), interval(300).pipe(take(3)));
const example = source.pipe(mergeAll());

example.subscribe(console.log);

// Output:
// 0 (from the second Observable at 300ms)
// 0 (from the first Observable at 500ms)
// 1 (from the second Observable at 600ms)
// 1 (from the first Observable at 1s)
// 2 (from the second Observable at 900ms)
// 2 (from the first Observable at 1.5s)
```
