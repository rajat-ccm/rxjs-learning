

```typescript 
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

// Emit a value every 500ms
const source = interval(500);
// After every 2 seconds, emit buffered values as an array
const buffered = source.pipe(bufferTime(2000));
// Subscribe and log buffered values
buffered.subscribe(val => console.log('Buffered values:', val));
// Buffered values: [0, 1, 2]
// Buffered values: [3, 4, 5]
// ...

```
