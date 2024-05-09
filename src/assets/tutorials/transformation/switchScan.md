### Use Case: Counting Button Clicks

Imagine you have a button in your application, and you want to keep track of the total number of clicks made on it.

```typescript
import { fromEvent } from "rxjs";
import { switchScan, mapTo } from "rxjs/operators";

const button = document.getElementById("myButton");
const click$ = fromEvent(button, "click");

click$
  .pipe(
    switchScan((count) => {
      return count + 1;
    }, 0)
  )
  .subscribe((count) => console.log(`Total clicks: ${count}`));
```
