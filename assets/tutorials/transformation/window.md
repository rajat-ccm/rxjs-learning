**Use Case:** Imagine an application tracking user actions where we want to group user actions happening between specific signals, like clicks on a start/stop button.

```typescript
import { interval, fromEvent } from "rxjs";
import { window, mergeAll, map } from "rxjs/operators";

// Control observable that triggers opening and closing of windows
const startStopButton = document.getElementById("startStopButton");
const clicks = fromEvent(startStopButton, "click");

// Data stream
const actions = interval(1000); // emits a value every second

const result = actions.pipe(
  window(clicks),
  map((win) =>
    win.pipe(
      mergeAll() // flatten the window values
    )
  ),
  mergeAll()
);

result.subscribe((x) => console.log(x));

// Suppose the button is clicked at second 1, 4, and 10
// Output: Values emitted between clicks are grouped, e.g., 2, 3 (between first two clicks)
```
