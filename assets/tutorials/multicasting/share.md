```typescript
import { Observable } from "rxjs";
import {
  multicast,
  publish,
  publishBehavior,
  publishLast,
  publishReplay,
  share,
} from "rxjs/operators";

// Simulate a message stream
const messageStream = new Observable((observer) => {
  observer.next("Hello");
  observer.next("How are you?");
  setTimeout(() => {
    observer.next("I'm good, thank you!");
  }, 2000);
});

// Multicast with publish operator
const multicastPublish = messageStream.pipe(publish());
multicastPublish.subscribe((message) => console.log("Subscriber 1:", message));
multicastPublish.subscribe((message) => console.log("Subscriber 2:", message));
multicastPublish.connect();

// Multicast with publishBehavior operator
const multicastPublishBehavior = messageStream.pipe(
  publishBehavior("Default Message")
);
multicastPublishBehavior.subscribe((message) =>
  console.log("Subscriber 3:", message)
);

// Multicast with publishLast operator
const multicastPublishLast = messageStream.pipe(publishLast());
multicastPublishLast.subscribe((message) =>
  console.log("Subscriber 4:", message)
);

// Multicast with publishReplay operator
const multicastPublishReplay = messageStream.pipe(publishReplay(2));
multicastPublishReplay.subscribe((message) =>
  console.log("Subscriber 5:", message)
);

// Share operator
const sharedStream = messageStream.pipe(share());
sharedStream.subscribe((message) => console.log("Subscriber 6:", message));
sharedStream.subscribe((message) => console.log("Subscriber 7:", message));

// Subscriber 1: Hello
// Subscriber 2: Hello
// Subscriber 3: Default Message
// Subscriber 4: I'm good, thank you!
// Subscriber 5: How are you?
// Subscriber 5: I'm good, thank you!
// Subscriber 6: Hello
// Subscriber 7: Hello
// Subscriber 6: How are you?
// Subscriber 7: How are you?
// Subscriber 6: I'm good, thank you!
// Subscriber 7: I'm good, thank you!
```
