```typescript
import { of } from "rxjs";
import { mergeMapTo } from "rxjs/operators";

// Example: Making multiple HTTP requests concurrently
const requests = of("Request 1", "Request 2", "Request 3");

requests
  .pipe(mergeMapTo(sendHttpRequest()))
  .subscribe((response) => console.log(response));

// Mock HTTP request function
function sendHttpRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Response");
    }, 1000);
  });
}

// Response
// Response
// Response
```
