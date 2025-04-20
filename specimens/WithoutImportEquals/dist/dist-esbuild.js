"use strict";
(() => {
    var u = Object.defineProperty;
    var p = (r, e) => {
        for (var o in e) u(r, o, {
            get: e[o],
            enumerable: !0
        })
    };
    var n = {};
    p(n, {
        Map: () => a,
        Set: () => l
    });
    var a = globalThis.Map;
    var l = globalThis.Set;
    var t = {};
    p(t, {
        range: () => m,
        reverse: () => f,
        sort: () => x,
        toArray: () => i
    });

    function m(r, e) {
        let o = [];
        for (let s = r; s < r + e; s++) o.push(s);
        return o
    }

    function x(r) {
        return [...r].sort()
    }

    function f(r) {
        return [...r].reverse()
    }

    function i(r) {
        return [...r]
    }
    console.log(t.reverse(t.range(1, 10)));
    console.log(new n.Map);
})();