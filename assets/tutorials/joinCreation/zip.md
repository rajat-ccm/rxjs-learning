```typescript
import { zip, of } from "rxjs";

const xCoords = of(1, 3, 5);
const yCoords = of(2, 4, 6);

const coordinates = zip(xCoords, yCoords);

coordinates.subscribe(([x, y]) => console.log(`Coordinates: (${x}, ${y})`));

// Coordinates: (1, 2)
// Coordinates: (3, 4)
// Coordinates: (5, 6)
```
