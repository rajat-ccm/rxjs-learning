```typescript
import { of } from "rxjs";
import { startWith } from "rxjs/operators";

const source = of("World");
const example = source.pipe(startWith("Hello"));

example.subscribe(console.log);

// Output:
// 'Hello'
// 'World'
```
