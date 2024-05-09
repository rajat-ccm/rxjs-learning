

```typescript 
import { from, partition, interval, take } from 'rxjs';

const source = interval(1000).pipe(take(10));
const [evens, odds] = partition(source, value => value % 2 === 0);

evens.subscribe(x => console.log(`Even: ${x}`));
odds.subscribe(x => console.log(`Odd: ${x}`));
// Even: 0
// Odd: 1
// Even: 2
// Odd: 3
// Even: 4
// Odd: 5
// Even: 6
// Odd: 7
// Even: 8
// Odd: 9
```
