

```typescript 
import { forkJoin, of, timer } from 'rxjs';
import { take } from 'rxjs/operators';

const source1$ = of('Hello');
const source2$ = timer(1000).pipe(take(1)); // Emits after 1 second

forkJoin({
  message: source1$,
  afterOneSecond: source2$
}).subscribe(result => console.log(result));
// { message: 'Hello', afterOneSecond: 0 }

```
