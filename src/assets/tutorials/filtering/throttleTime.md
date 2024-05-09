```typescript
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

const input$ = fromEvent(document.querySelector("input"), "input");
const result$ = input$.pipe(throttleTime(1000));
result$.subscribe((e) => console.log(e.target.value));

// Output: Emits first input value, then ignores others within 1 second.
```
