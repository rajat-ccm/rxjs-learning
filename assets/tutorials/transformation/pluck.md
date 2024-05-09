# Caching data

RxJS can cache data fetched from APIs or other sources to improve performance and reduce redundant requests.

```typescript
import { ajax } from "rxjs/ajax";
import { pluck, shareReplay } from "rxjs/operators";

const cachedData$ = ajax
  .getJSON("https://api.example.com/data")
  .pipe(pluck("response"), shareReplay(1));

// Later, you can subscribe to cachedData$ multiple times without triggering multiple requests.
```

Consider you have a stream of user objects, and you want to extract just the usernames from each object.

```typescript
import { from } from "rxjs";
import { pluck } from "rxjs/operators";

// Simulate a stream of user objects
const userStream = from([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]);

// Extract usernames
userStream
  .pipe(pluck("name"))
  .subscribe((username) => console.log(`Username: ${username}`));
// Username: Alice
// Username: Bob
// Username: Charlie
```
