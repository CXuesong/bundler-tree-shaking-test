# bundler-tree-shaking-test

This repo tests the tree-shaking ability of various bundlers against the following 2 kinds of sub-module (i.e. "namespace") imports.

```typescript
import * as MyLib from "./MyLib";
// Namespace aliasing with `import =`: This could be not tree-shakable
import Linq1 = MyLib.Linq;
// Namespace aliasing with `import {}`: This should be tree-shakable
import { Containers, Linq as Linq2 } from "./MyLib";

console.log(Linq1.reverse(Linq1.range(1, 10)));
console.log(Linq2.reverse(Linq2.range(1, 10)));
console.log(new Containers.Map());
```

## Test result

| Bundler   | Version   | `import =`   | `import {}` |
| --------- | --------- | ------------ | ----------- |
| webpack   | 5.99.6    | Not shakable | Shakable    |
| rollup    | 4.40.0    | Not shakable | Shakable    |
| vite      | 6.3.2     | Not shakable | Shakable    |
| esbuild   | 0.25.2    | Not shakable | Shakable    |
