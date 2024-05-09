```typescript
import { interval } from "rxjs";
import { timeInterval } from "rxjs/operators";

const source = interval(1000); // Emit value every second

source
  .pipe(timeInterval())
  .subscribe((interval) => console.log("Time Interval:", interval));

// Time Interval: TimeInterval { value: 0, interval: 1000 }
// Time Interval: TimeInterval { value: 1, interval: 1000 }
// Time Interval: TimeInterval { value: 2, interval: 1000 }
// ...
```
