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

    function sort(array) {
        const result = [...array];
        // I know this is not a good way to sort, but it's just for demonstration purposes.
        return result.sort();
    }

    function reverse(array) {
        const result = [...array];
        return result.reverse();
    }

    function toArray(seq) {
        return [...seq];
    }

    var index = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        range: range,
        reverse: reverse,
        sort: sort,
        toArray: toArray
    });

    // Namespace aliasing with `import =`: This could be not tree-shakable
    var Linq1 = index;
    console.log(Linq1.reverse(Linq1.range(1, 10)));
    console.log(reverse(range(1, 10)));
    console.log(new Map());

})();