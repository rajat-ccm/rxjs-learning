```typescript
import { of, timer } from "rxjs";
import { timeout } from "rxjs/operators";

const source = of("Hello World!").pipe(
  delay(3000) // Delaying emission for demonstration
);

source.pipe(timeout(2000)).subscribe(
  (value) => console.log(value),
  (error) => console.error("Timeout error:", error)
);

// Timeout error: Timeout has occurred
```
