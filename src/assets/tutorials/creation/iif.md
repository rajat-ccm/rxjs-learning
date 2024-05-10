```typescript
import { iif, of } from "rxjs";

const condition = true;

const observable = iif(
  () => condition,
  of("True Observable"),
  of("False Observable")
);

observable.subscribe((value) => console.log("Value:", value));
```
