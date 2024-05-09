Imagine you have a real-time temperature sensor, and you want to detect sudden changes in temperature. You can use pairwise to compare the current temperature with the previous one and take appropriate action if the difference exceeds a certain threshold.

```typescript
import { from } from "rxjs";
import { pairwise } from "rxjs/operators";

// Simulate temperature data stream
const temperatureStream = from([25, 26, 28, 24, 22, 30]);

// Detect sudden changes in temperature
temperatureStream.pipe(pairwise()).subscribe(([prev, current]) => {
  const change = Math.abs(current - prev);
  if (change >= 3) {
    console.log(`Temperature changed abruptly from ${prev} to ${current}`);
  }
});

// Temperature changed abruptly from 26 to 28
// Temperature changed abruptly from 24 to 22
// Temperature changed abruptly from 22 to 30
```
