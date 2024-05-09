```typescript
import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

const objects$ = of(
  { name: "John", age: 25 },
  { name: "Jane", age: 25 },
  { name: "Jane", age: 26 },
  { name: "John", age: 25 }
);
const result$ = objects$.pipe(distinctUntilKeyChanged("name"));
result$.subscribe(console.log);

// Output:
// { name: 'John', age: 25 }
// { name: 'Jane', age: 25 }
```
