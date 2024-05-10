```typescript
import { range } from "rxjs";

const rangeObservable = range(1, 5); // Start from 1, emit 5 values

rangeObservable.subscribe((value) => console.log("Range value:", value));
```
