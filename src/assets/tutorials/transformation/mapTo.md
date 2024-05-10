```typescript
import { from } from "rxjs";
import { mapTo } from "rxjs/operators";

// Example: Mapping numbers to their squares
const numbers = from([1, 2, 3, 4, 5]);

numbers.pipe(mapTo((x) => x * x)).subscribe((square) => console.log(square));

// 1
// 4
// 9
// 16
// 25
```
