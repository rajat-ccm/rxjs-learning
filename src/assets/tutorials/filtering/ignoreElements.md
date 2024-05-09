```typescript
import { interval } from "rxjs";
import { take, ignoreElements } from "rxjs/operators";

const source$ = interval(1000).pipe(take(3), ignoreElements());
source$.subscribe({
  next: () => console.log("This will not be called"),
  complete: () => console.log("Completed"),
});

// Output:
// Completed
```
