import * as MyLib from "./MyLib";
// Namespace aliasing with `import =`: This could be not tree-shakable
// import Linq1 = MyLib.Linq;
// This should be tree-shakable
import { Containers, Linq as Linq2 } from "./MyLib";

// console.log(Linq1.reverse(Linq1.range(1, 10)));
console.log(Linq2.reverse(Linq2.range(1, 10)));
console.log(new Containers.Map());
