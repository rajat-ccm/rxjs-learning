# Handling HTTP requests

RxJS operators can be used to manage HTTP requests, handle responses, and perform error handling.

```typescript
import { ajax } from "rxjs/ajax";

ajax.getJSON("https://api.example.com/data").subscribe(
  (response) => console.log("Data:", response),
  (error) => console.error("Error fetching data:", error)
);
```
