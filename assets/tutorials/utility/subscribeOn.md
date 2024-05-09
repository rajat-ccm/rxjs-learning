```typescript
import { interval, of, fromEvent, merge } from "rxjs";
import { map, subscribeOn, observeOn } from "rxjs/operators";
import { asyncScheduler, asapScheduler } from "rxjs";

// Simulating real-time updates source (e.g., WebSocket)
const realTimeUpdates$ = interval(1000).pipe(
  map((val) => `Real-time update ${val}`),
  observeOn(asyncScheduler) // Process real-time updates asynchronously
);

// Simulating remote server fetch source
const remoteData$ = of("Remote server data").pipe(
  subscribeOn(asapScheduler) // Fetch data from remote server on a separate thread
);

// Merge both streams
const merged$ = merge(realTimeUpdates$, remoteData$);

// Subscribe to merged stream
merged$.subscribe((val) => console.log("Received:", val));

// Received: Real-time update 0
// Received: Remote server data
// Received: Real-time update 1
// Received: Real-time update 2
// ...
```
