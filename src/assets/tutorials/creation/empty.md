```typescript
import { empty } from "rxjs";

const emptyObservable = empty();

emptyObservable.subscribe({
  complete: () => console.log("Completed"),
});
```
