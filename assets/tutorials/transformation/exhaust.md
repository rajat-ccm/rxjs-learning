```typescript
import { interval, timer } from "rxjs";
import { exhaust, take } from "rxjs/operators";

// Example: Managing button click events
const clicks = interval(1000);
const requests = clicks.pipe(take(3), exhaust());

requests.subscribe(() => console.log("Button clicked"));

// Simulating button clicks
setTimeout(() => {
  console.log("Simulating button click...");
  clicks.next();
}, 500);

setTimeout(() => {
  console.log("Simulating button click...");
  clicks.next();
}, 1500);

// Simulating button click...
// Button clicked
// Simulating button click...
```
