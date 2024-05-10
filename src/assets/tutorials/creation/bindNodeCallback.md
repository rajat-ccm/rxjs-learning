```typescript
import { bindNodeCallback } from "rxjs";

// Simulated asynchronous function
function readFile(path: string, callback: (error: any, data: any) => void) {
  setTimeout(() => {
    callback(null, `Content of ${path}`);
  }, 1000);
}

const readFileObservable = bindNodeCallback(readFile);

readFileObservable("/path/to/file.txt").subscribe((content) => {
  console.log("File content:", content);
});
```
