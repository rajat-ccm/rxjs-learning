```typescript
// Using concatMapTo to process data from each source sequentially
concat(source1, source2, source3)
  .pipe(concatMapTo((data) => of(`Processed ${data}`)))
  .subscribe((result) => console.log(result));

// Processed Source 1 Data
// Processed Source 2 Data
// Processed Source 3 Data
```
