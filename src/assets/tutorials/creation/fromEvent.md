
# User input debouncing

Debouncing user input can prevent rapid firing of events, such as search queries in an autocomplete field.

```typescript 
import { fromEvent, debounceTime, map } from 'rxjs';

const searchInput = document.getElementById('search');

fromEvent(searchInput, 'input')
  .pipe(
    debounceTime(300),
    map(event => event.target.value)
  )
  .subscribe(query => {
    // Perform search with query
  });

```
