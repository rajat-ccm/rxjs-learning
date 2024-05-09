Imagine you have a web application that makes HTTP requests to a server. Sometimes these requests might fail due to network issues or server errors. In such cases, you want your application to handle these errors gracefully, possibly retrying the request a few times before giving up.

```typescript
import { Observable, throwError, timer } from "rxjs";
import { catchError, retry, retryWhen, delayWhen } from "rxjs/operators";
import { HttpClient } from "@angular/common/http"; // assuming Angular HttpClient is used

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // milliseconds

// Function to make HTTP request
function makeHttpRequest(http: HttpClient): Observable<any> {
  return http.get("https://example.com/api/data").pipe(
    // Retry the request a maximum of MAX_RETRIES times
    retry(MAX_RETRIES),
    // If still fails after retries, handle the error
    catchError((error) => {
      console.error("Request failed:", error);
      return throwError("Sorry, something went wrong. Please try again later.");
    })
  );
}

// Function to make HTTP request with custom retry logic
function makeHttpRequestWithCustomRetry(http: HttpClient): Observable<any> {
  return http.get("https://example.com/api/data").pipe(
    // Retry the request with custom logic
    retryWhen((errors) => {
      return errors.pipe(
        // Delay each retry attempt
        delayWhen((error, attempt) => timer(RETRY_DELAY * attempt)),
        // Retry only if the maximum retries haven't been exceeded
        retry(MAX_RETRIES)
      );
    }),
    // If still fails after retries, handle the error
    catchError((error) => {
      console.error("Request failed:", error);
      return throwError("Sorry, something went wrong. Please try again later.");
    })
  );
}

// Usage
const httpClient: HttpClient; // Assume HttpClient instance is available

// Example usage of the first function
makeHttpRequest(httpClient).subscribe(
  (data) => console.log("Received data:", data),
  (error) => console.error("Error:", error)
);

// Example usage of the second function
makeHttpRequestWithCustomRetry(httpClient).subscribe(
  (data) => console.log("Received data:", data),
  (error) => console.error("Error:", error)
);
```
