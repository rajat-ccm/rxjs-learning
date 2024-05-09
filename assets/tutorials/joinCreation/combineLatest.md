

```typescript 
import { combineLatest, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source1$ = interval(1000).pipe(take(3)); // emits 0, 1, 2
const source2$ = interval(2000).pipe(take(2)); // emits 0, 1

combineLatest([source1$, source2$]).subscribe({
  next: ([val1, val2]) => console.log(`Source1: ${val1}, Source2: ${val2}`)
});
// Source1: 0, Source2: 0
// Source1: 1, Source2: 0
// Source1: 2, Source2: 0

```
