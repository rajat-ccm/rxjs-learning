```typescript
import { interval } from "rxjs";
import { withLatestFrom, map, take } from "rxjs/operators";

const source = interval(5000);
const secondSource = interval(1000);
const example = source.pipe(
  withLatestFrom(secondSource),
  map(
    ([first, second]) =>
      `First Source (5s): ${first} Second Source (1s): ${second}`
  ),
  take(2)
);

example.subscribe(console.log);

// Output:
// 'First Source (5s): 0 Second Source (1s): 4'
// 'First Source (5s): 1 Second Source (1s): 9'
```
