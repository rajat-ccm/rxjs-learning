```typescript
import { interval } from "rxjs";
import { bufferWhen } from "rxjs/operators";

// Emit a value every 500ms
const source = interval(500);
// Close buffer and emit when user clicks on document
const closingNotifier = () => fromEvent(document, "click");
// Open buffer when buffer is closed
const bufferClosingSelector = () => interval(2000);
// Collect values emitted by source Observable within the buffer
const buffered = source.pipe(bufferWhen(bufferClosingSelector));
// Subscribe and log buffered values
buffered.subscribe((val) => console.log("Buffered values:", val));
// Buffered values: [0, 1, 2, 3]
// Buffered values: [4, 5, 6, 7, 8, 9, 10]
// ...
```
