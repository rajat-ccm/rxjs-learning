**Use Case:** Resetting an error log collector whenever a certain error-correcting action occurs.

```typescript
import { interval, timer } from "rxjs";
import { windowWhen, tap, mergeAll } from "rxjs/operators";

const source = interval(1000);
const reset = () => timer(5000);

const example = source.pipe(
  windowWhen(reset),
  tap(() => console.log("Window reset")),
  mergeAll()
);

example.subscribe((val) => console.log(val));
// Output: Window reset every 5 seconds, emitting 0, 1, 2, 3, 4 then reset
```
