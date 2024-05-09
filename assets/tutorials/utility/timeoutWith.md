```typescript
import { of, timer } from "rxjs";
import { timeoutWith } from "rxjs/operators";

const source = of("Hello");

source.pipe(timeoutWith(2000, of("Backup Hello"))).subscribe(
  (value) => console.log(value),
  (error) => console.error("Timeout error:", error)
);

// after 2 sec
// Backup Hello
```
