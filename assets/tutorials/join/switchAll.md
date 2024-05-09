```typescript
import { interval, of } from "rxjs";
import { switchAll, map, take } from "rxjs/operators";

const source = interval(1000).pipe(
  take(2),
  map((val) => of(`Interval: ${val}`))
);

const example = source.pipe(switchAll());
example.subscribe(console.log);

// Output:
// 'Interval: 0'
// 'Interval: 1'
```
