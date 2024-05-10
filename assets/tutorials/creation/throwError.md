```typescript
import { throwError } from "rxjs";

const errorObservable = throwError(new Error("Something went wrong"));

errorObservable.subscribe({
  error: (err) => console.error("Error:", err.message),
});
```
