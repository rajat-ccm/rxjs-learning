```typescript
import { race, timer, map } from "rxjs";

const firstTimer = timer(1000).pipe(map(() => "First Timer!"));
const secondTimer = timer(1500).pipe(map(() => "Second Timer!"));
const thirdTimer = timer(500).pipe(map(() => "Third Timer!"));

race(firstTimer, secondTimer, thirdTimer).subscribe((result) =>
  console.log(result)
);

// Third Timer!
```
