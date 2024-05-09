# Form validation

RxJS operators can help in validating form inputs and displaying error messages.

```typescript
import { fromEvent, map, debounceTime, distinctUntilChanged } from "rxjs";

const emailInput = document.getElementById("email");

fromEvent(emailInput, "input")
  .pipe(
    map((event: any) => event.target.value),
    debounceTime(500),
    distinctUntilChanged(),
    map((email) => validateEmail(email))
  )
  .subscribe((isValid) => {
    // Update UI based on email validity
  });

function validateEmail(email: string): boolean {
  // Perform email validation logic
}
```

general example

```typescript
import { of } from "rxjs";
import { distinctUntilChanged, distinct } from "rxjs/operators";

const source$ = of(1, 1, 2, 2, 2, 1, 3, 3, 1);
source$.pipe(distinctUntilChanged()).subscribe(console.log);
// 1
// 2
// 1
// 3
// 1
```
