```typescript
import { concat, of, delay, merge, interval, take, map, tap } from "rxjs";

const source1$ = interval(1500).pipe(
  take(5),
  map((index) => `first:${index}`),
  tap((item) => console.log("---------\n"))
);
const source2$ = interval(2000).pipe(
  take(5),
  map((index) => `second:${index}`),
  tap((item) => console.log("---------\n"))
);

merge(source1$, source2$).subscribe((val) => console.log(val));

// ---------
// first:0
// ---------
// second:0
// ---------
// first:1
// ---------
// second:1
// ---------
// first:2
// ---------
// first:3
// ---------
// second:2
// ---------
// first:4
// ---------
// second:3
// ---------
// second:4
```
