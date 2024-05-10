```typescript
import { from } from "rxjs";

const array = [1, 2, 3];
const promise = Promise.resolve("Hello");

const arrayObservable = from(array);
const promiseObservable = from(promise);

arrayObservable.subscribe((value) => console.log("Array value:", value));
promiseObservable.subscribe((value) => console.log("Promise value:", value));
```
