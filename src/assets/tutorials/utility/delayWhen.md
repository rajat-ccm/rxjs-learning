This is useful when you want to dynamically adjust the delay based on some conditions.

```typescript
import { of, timer } from "rxjs";
import { delayWhen } from "rxjs/operators";

const source = of("Hello World!");

source
  .pipe(delayWhen(() => timer(2000)))
  .subscribe((value) => console.log(value));
```
