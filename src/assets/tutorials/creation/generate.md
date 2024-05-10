```typescript
import { generate } from "rxjs";

const generateObservable = generate(
  0, // initial state
  (x) => x < 5, // condition
  (x) => x + 1, // iteration
  (x) => x * x // result selector
);

generateObservable.subscribe((value) => console.log("Generated value:", value));
```
