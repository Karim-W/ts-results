# ts-results

Library for returning results from functions. Follows a similar-ish Syntax to
Rust's Result enum.

## installation

With npm:

```bash
npm install @karim-w/ts-results
```

With yarn:

```bash
yarn add @karim-w/ts-results
```

With pnpm:

```bash
pnpm i @karim-w/ts-results
```

## Usage

import the library:

```typescript
import { Result } from "@karim-w/ts-results";
```

### Creating a Successful Result

```typescript
const result = Result.Ok("Hello World");
```

### Creating an Erroneous Result

```typescript
const result = Result.Err("Something went wrong");
```

### Handling a Result

```typescript
const result = getResult();

if (result.isOk()) {
  console.log(result.unwrap());
} else {
  console.error(result.unwrapErr());
}

// or

if (result.isErr()) {
  console.log(result.unwrapErr());
} else {
  console.error(result.unwrap());
}
```

### LICENSE

BSD-3-Clause

### Contributing

Feel free to open an issue or a pull request.

### Author

Karim-w
