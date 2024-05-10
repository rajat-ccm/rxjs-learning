```typescript
import { timer } from "rxjs";

const timerObservable = timer(2000); // Emit after 2 seconds

timerObservable.subscribe(() => console.log("Timer completed"));
```
