### Use Case: Autocomplete Search

Consider an autocomplete feature in a search bar. You want to send a request to the server every time the user types in the search bar, but you want to ignore the previous requests if a new one is made.

```typescript
import { fromEvent } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";

const searchInput = document.getElementById("searchInput");
const search$ = fromEvent(searchInput, "input").pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((event) => {
    const term = event.target.value;
    return ajax(`/search?term=${term}`);
  })
);

search$.subscribe((response) => console.log(response));
```
