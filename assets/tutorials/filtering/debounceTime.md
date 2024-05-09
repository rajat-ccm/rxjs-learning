```typescript
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

const input$ = fromEvent(document.querySelector("input"), "input");
const result$ = input$.pipe(debounceTime(500));
result$.subscribe((e) => console.log(e.target.value));

// Output: Outputs the last input value if 500ms pass without another input.
```
