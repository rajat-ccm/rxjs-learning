```typescript
import { fromEvent } from "rxjs";
import { mergeMap } from "rxjs/operators";

const clickObservable = fromEvent(document, "click");
const example = clickObservable.pipe(
  mergeMap((event) => from(fetch("https://api.example.com/data")))
);
example.subscribe(console.log);
```
