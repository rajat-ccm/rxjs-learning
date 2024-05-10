```typescript
import { of } from "rxjs";

const valuesObservable = of(1, 2, 3);

valuesObservable.subscribe((value) => console.log("Value:", value));
```
