(function() {
    'use strict';

    const Map = globalThis.Map;

    function range(start, count) {
        const result = [];
        for (let i = start; i < start + count; i++) {
            result.push(i);
        }
        return result;
    }

    function reverse(array) {
        const result = [...array];
        return result.reverse();
    }

    // Namespace aliasing with `import =`: This could be not tree-shakable
    // import Linq1 = MyLib.Linq;
    // This should be tree-shakable
    // console.log(Linq1.reverse(Linq1.range(1, 10)));
    console.log(reverse(range(1, 10)));
    console.log(new Map());

})();