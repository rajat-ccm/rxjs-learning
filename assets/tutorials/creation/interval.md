```typescript
import { interval } from "rxjs";

const intervalObservable = interval(1000);

intervalObservable.subscribe((value) => console.log("Interval value:", value));
```
