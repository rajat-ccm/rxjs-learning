
# Multiply by 10



```typescript 
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(map(value => value * 10));
example.subscribe(console.log);
// 10
// 20
// 30
// 40
// 50
```
