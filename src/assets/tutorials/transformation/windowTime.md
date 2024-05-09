**Use Case:** Grouping events such as clicks or user inputs based on time for processing, like in an analytics dashboard that updates every second.

```typescript
import { fromEvent, interval } from "rxjs";
import { windowTime, mergeAll, map } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  windowTime(1000),
  map((win) =>
    win.pipe(
      mergeAll() // Flatten the window values
    )
  ),
  mergeAll()
);

result.subscribe((x) => console.log(x));

// Outputs all click events grouped into 1-second intervals
```
