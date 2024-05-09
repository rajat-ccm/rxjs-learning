Consider a scenario where you're building a web application that fetches data from a remote server and then performs some processing on it before displaying it to the user. Let's say you have an API endpoint /data that returns a large dataset, and you want to process this data asynchronously to avoid blocking the main thread.

```typescript
import { from } from "rxjs";
import { observeOn, subscribeOn } from "rxjs/operators";
import { asyncScheduler } from "rxjs";

// Simulating a function to fetch data from an API
function fetchDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}

// Simulating a function to process data
function processData(data) {
  return data.map((item) => item * 2);
}

// Fetching data from API and processing asynchronously
from(fetchDataFromAPI())
  .pipe(
    subscribeOn(asyncScheduler), // Subscribing on asyncScheduler for fetching data
    observeOn(asyncScheduler) // Observing on asyncScheduler for processing data
  )
  .subscribe({
    next: (data) => {
      const processedData = processData(data);
      console.log("Processed Data:", processedData);
    },
    error: (err) => console.error("Error occurred:", err),
    complete: () => console.log("Processing complete"),
  });

// Processed Data: [2, 4, 6, 8, 10]
// Processing complete
```
