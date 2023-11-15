# Debounce Function

A TypeScript debounce function that can be used to limit the frequency of function calls.

## Usage

```typescript
import { debounce } from '@garmingo/debounce';

const myFunction = () => {
  console.log('Debounced function called');
};

const debouncedFunction = debounce(myFunction, 500); // Set the delay time in milliseconds

// Call debouncedFunction multiple times quickly
debouncedFunction();
debouncedFunction();
debouncedFunction();

// Only one actual call to myFunction will be made after 500ms
```

## Parameters

 - `func`: The original function you want to debounce.
 - `delay`: The delay time in milliseconds.