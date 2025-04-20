"use strict";
(() => {
    var a = Object.defineProperty;
    var p = (r, o) => {
        for (var t in o) a(r, t, {
            get: o[t],
            enumerable: !0
        })
    };
    var n = {};
    p(n, {
        Map: () => i,
        Set: () => l
    });
    var i = globalThis.Map;
    var l = globalThis.Set;
    var e = {};
    p(e, {
        range: () => m,
        reverse: () => f,
        sort: () => x,
        toArray: () => c
    });

    function m(r, o) {
        let t = [];
        for (let s = r; s < r + o; s++) t.push(s);
        return t
    }

    function x(r) {
        return [...r].sort()
    }

    function f(r) {
        return [...r].reverse()
    }

    function c(r) {
        return [...r]
    }
    var u = e;
    console.log(u.reverse(u.range(1, 10)));
    console.log(e.reverse(e.range(1, 10)));
    console.log(new n.Map);
})();