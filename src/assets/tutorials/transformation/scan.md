Let's say you have a stream of numbers, and you want to calculate the cumulative sum of those numbers.

```typescript
import { from } from "rxjs";
import { scan } from "rxjs/operators";

// Simulate a stream of numbers
const numbersStream = from([1, 2, 3, 4, 5]);

// Calculate cumulative sum
numbersStream
  .pipe(scan((acc, val) => acc + val, 0))
  .subscribe((sum) => console.log(`Cumulative sum: ${sum}`));

// Cumulative sum: 1
// Cumulative sum: 3
// Cumulative sum: 6
// Cumulative sum: 10
// Cumulative sum: 15
```
