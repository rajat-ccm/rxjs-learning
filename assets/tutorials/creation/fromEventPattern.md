```typescript
import { fromEventPattern } from "rxjs";

function addClickHandler(handler: (event: MouseEvent) => void) {
  document.addEventListener("click", handler);
}

function removeClickHandler(handler: (event: MouseEvent) => void) {
  document.removeEventListener("click", handler);
}

const clickObservable = fromEventPattern(addClickHandler, removeClickHandler);

clickObservable.subscribe(() => console.log("Clicked"));
```
