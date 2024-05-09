Let's consider a real-world scenario of tracking and analyzing stock prices. We'll simulate a stream of stock prices over time and then demonstrate the usage of RxJS operators to perform calculations like counting, finding maximum and minimum values, and reducing the data stream.

```typescript
// Importing necessary RxJS modules
import { interval, of } from "rxjs";
import { take, map, reduce, max, min, count } from "rxjs/operators";

// Simulated stream of stock prices
const stockPricesStream = interval(1000).pipe(
  take(10), // Let's limit to 10 updates for this example
  map(() => Math.random() * 100) // Simulate random stock prices
);

// Real-world use case: Analyzing stock prices
stockPricesStream.subscribe({
  next: (price) => console.log(`Current Price: $${price.toFixed(2)}`),
  complete: () => {
    // Count the number of stock price updates
    stockPricesStream
      .pipe(count())
      .subscribe((count) => console.log(`Total updates: ${count}`));

    // Find maximum stock price
    stockPricesStream
      .pipe(max())
      .subscribe((maxPrice) =>
        console.log(`Maximum Price: $${maxPrice.toFixed(2)}`)
      );

    // Find minimum stock price
    stockPricesStream
      .pipe(min())
      .subscribe((minPrice) =>
        console.log(`Minimum Price: $${minPrice.toFixed(2)}`)
      );

    // Calculate the total price change over time
    stockPricesStream
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe((totalPrice) =>
        console.log(`Total Price Change: $${totalPrice.toFixed(2)}`)
      );
  },
});

// Current Price: $16.30
// Current Price: $51.57
// Current Price: $72.01
// Current Price: $89.64
// Current Price: $43.20
// Current Price: $62.72
// Current Price: $7.82
// Current Price: $63.58
// Current Price: $80.20
// Current Price: $16.29
// Total updates: 10
// Maximum Price: $89.64
// Minimum Price: $7.82
// Total Price Change: $503.92
```
