```typescript
import { of } from "rxjs";
import { toArray } from "rxjs/operators";

const source = of(1, 2, 3);

source.pipe(toArray()).subscribe((array) => console.log("Array:", array));

// Array: [1, 2, 3]
```
