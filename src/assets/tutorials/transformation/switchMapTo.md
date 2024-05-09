### Use Case: Polling

Imagine you want to continuously poll a server for updates every few seconds.

```typescript
import { interval } from "rxjs";
import { switchMapTo } from "rxjs/operators";

const poll$ = interval(3000).pipe(switchMapTo(ajax("/updates")));

poll$.subscribe((response) => console.log(response));
```
