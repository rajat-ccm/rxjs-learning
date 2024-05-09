**Use Case:** Monitoring data usage spikes by opening a window on a "start watching" signal and closing it on a "stop watching" signal.

```typescript
import { interval, timer } from "rxjs";
import { windowToggle, tap, mergeAll } from "rxjs/operators";

const source = interval(1000);
const toggle = timer(5000); // start first window at 5s
const closing = () => timer(3000); // close window after 3s

const example = source.pipe(
  windowToggle(toggle, closing),
  tap((_) => console.log("New window")),
  mergeAll()
);

example.subscribe((val) => console.log(val));

// Output: "New window", then emits values 5, 6, 7
```
