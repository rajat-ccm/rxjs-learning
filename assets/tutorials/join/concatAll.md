```typescript
import { of, interval } from "rxjs";
import { take, map, concatAll } from "rxjs/operators";

const source = of(interval(1000).pipe(take(3)), interval(500).pipe(take(3)));
const example = source.pipe(concatAll());

example.subscribe(console.log);

// Output:
// 0 (after 1s)
// 1 (after 2s)
// 2 (after 3s)
// 0 (after 3.5s)
// 1 (after 4s)
// 2 (after 4.5s)
```
