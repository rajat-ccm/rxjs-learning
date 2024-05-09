**Use Case:** Counting items from a production line sensor in batches to process every certain number of items.

```typescript
import { range } from "rxjs";
import { windowCount, mergeAll } from "rxjs/operators";

const source = range(1, 10);
const example = source.pipe(windowCount(3), mergeAll());

example.subscribe((val) => console.log(val));
// Output: 1 2 3 4 5 6 7 8 9 10
// Emits in batches of 3 but merged for displaying each value
```
