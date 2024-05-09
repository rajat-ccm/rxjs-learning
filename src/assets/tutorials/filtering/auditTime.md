```typescript
import { fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");
const result$ = clicks$.pipe(auditTime(2000));
result$.subscribe((x) => console.log("Clicked"));

// Output: "Clicked" is logged after pausing clicks for 2 seconds.
```
