```typescript
import { of } from "rxjs";
import { delay } from "rxjs/operators";

const source = of("Hello World!");

source.pipe(delay(2000)).subscribe((value) => console.log(value));

// Hello World!
```
