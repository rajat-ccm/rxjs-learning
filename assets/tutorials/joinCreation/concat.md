

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

concat(source1$, source2$).subscribe((val) => console.log(val));
// ---------
// first:0
// ---------
// first:1
// ---------
// first:2
// ---------
// first:3
// ---------
// first:4

// source2$ is waiting for the firat one to complete
// ---------
// second:0
// ---------
// second:1
// ---------
// second:2
// ---------
// second:3
// ---------
// second:4
```
