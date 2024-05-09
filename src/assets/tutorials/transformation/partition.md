Suppose you have a stream of numbers, and you want to separate even and odd numbers into two different streams.

```typescript
import { from } from "rxjs";
import { partition } from "rxjs/operators";

// Simulate a stream of numbers
const numbersStream = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Partition even and odd numbers
const [evenNumbers$, oddNumbers$] = numbersStream.pipe(
  partition((num) => num % 2 === 0)
);

evenNumbers$.subscribe((num) => console.log(`Even number: ${num}`));
oddNumbers$.subscribe((num) => console.log(`Odd number: ${num}`));

// Even number: 2
// Even number: 4
// Even number: 6
// Even number: 8
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9
```
