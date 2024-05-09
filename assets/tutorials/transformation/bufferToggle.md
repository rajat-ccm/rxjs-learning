

```typescript 
import { interval, fromEvent } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

// Emit a value every 500ms
const source = interval(500);
// Open buffer when mouse is clicked, close buffer when mouse is released
const toggle = fromEvent(document, 'click').pipe(
  bufferToggle(fromEvent(document, 'mousedown'), () => fromEvent(document, 'mouseup'))
);
// Collect values emitted by source Observable within the toggle buffer
const buffered = source.pipe(bufferToggle(toggle, val => interval(1000)));
// Subscribe and log buffered values
buffered.subscribe(val => console.log('Buffered values:', val));
// Buffered values: [0, 1, 2, 3]
// Buffered values: [4, 5, 6, 7, 8, 9, 10]
// ...

```
