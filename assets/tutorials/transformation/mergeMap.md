```typescript
import { of } from "rxjs";
import { concatMap, switchMap, mergeMap, exhaustMap } from "rxjs/operators";

// Mock API service
const apiService = {
  getUser: (userId) => of({ id: userId, name: `User ${userId}` }),
  getPosts: (userId) =>
    of([
      { id: 1, userId: userId, title: `Post 1 by User ${userId}` },
      { id: 2, userId: userId, title: `Post 2 by User ${userId}` },
    ]),
};

// Example user IDs
const userIds = [1, 2, 3];

// Helper function to simulate API request
const simulateHttpRequest = (requestFn) => (param) =>
  requestFn(param).pipe(
    // Simulate network latency
    delay(Math.random() * 1000)
  );

// Real-world example using different mapping operators

// concatMap
console.log("ConcatMap Example:");
of(...userIds)
  .pipe(concatMap((user) => simulateHttpRequest(apiService.getUser)(user)))
  .subscribe((user) => console.log("User:", user));

// switchMap
console.log("\nSwitchMap Example:");
of(...userIds)
  .pipe(switchMap((user) => simulateHttpRequest(apiService.getUser)(user)))
  .subscribe((user) => console.log("User:", user));

// mergeMap
console.log("\nMergeMap Example:");
of(...userIds)
  .pipe(mergeMap((user) => simulateHttpRequest(apiService.getUser)(user)))
  .subscribe((user) => console.log("User:", user));

// exhaustMap
console.log("\nExhaustMap Example:");
of(...userIds)
  .pipe(exhaustMap((user) => simulateHttpRequest(apiService.getUser)(user)))
  .subscribe((user) => console.log("User:", user));
```

Sure, let's simulate the output for each mapping operator based on the provided example:

### ConcatMap Example:

```
User: { id: 1, name: 'User 1' }
User: { id: 2, name: 'User 2' }
User: { id: 3, name: 'User 3' }
```

In this output, you can see that each user's data is fetched sequentially, maintaining the order of the original array of user IDs.

### SwitchMap Example:

```
User: { id: 3, name: 'User 3' }
```

Since `switchMap` only emits the latest value, it fetches the data for the last user ID (3) and cancels the previous requests.

### MergeMap Example:

```
User: { id: 2, name: 'User 2' }
User: { id: 1, name: 'User 1' }
User: { id: 3, name: 'User 3' }
```

Here, `mergeMap` processes all user IDs concurrently, fetching their data simultaneously, resulting in the order of emitted values being different from the original order of user IDs.

### ExhaustMap Example:

```
User: { id: 1, name: 'User 1' }
```

`ExhaustMap` only emits the first user's data because it ignores subsequent requests until the current one completes. Since the first request is still in progress when the other user IDs are emitted, their requests are ignored.
