```typescript
import { interval } from "rxjs";
import { timestamp } from "rxjs/operators";

const source = interval(1000); // Emit value every second

source
  .pipe(timestamp())
  .subscribe((timestamp) => console.log("Timestamp:", timestamp));

// Timestamp: Timestamp { value: 0, timestamp: 1633432677129 }
// Timestamp: Timestamp { value: 1, timestamp: 1633432678130 }
// Timestamp: Timestamp { value: 2, timestamp: 1633432679131 }
// ...
```
