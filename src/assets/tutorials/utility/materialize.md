# Example Markdown File

This is a **sample** Markdown file created using Node.js.

- Bullet Point 1
- Bullet Point 2

```typescript
import { of } from "rxjs";
import { materialize, dematerialize } from "rxjs/operators";

const source = of(1, 2, 3);

const materialized = source.pipe(materialize());

materialized.subscribe((notification) => {
  console.log("Notification:", notification);
});

const dematerialized = materialized.pipe(dematerialize());

dematerialized.subscribe((value) => {
  console.log("Value:", value);
});

// Notification: Notification { kind: 'N', value: 1 }
// Notification: Notification { kind: 'N', value: 2 }
// Notification: Notification { kind: 'N', value: 3 }
// Value: 1
// Value: 2
// Value: 3
```
