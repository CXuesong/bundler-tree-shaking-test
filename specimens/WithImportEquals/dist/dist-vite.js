(function() {
    "use strict";
    const u = globalThis.Map;

    function r(e, n) {
        const l = [];
        for (let o = e; o < e + n; o++) l.push(o);
        return l
    }

    function c(e) {
        return [...e].sort()
    }

    function t(e) {
        return [...e].reverse()
    }

    function i(e) {
        return [...e]
    }
    const s = Object.freeze(Object.defineProperty({
        __proto__: null,
        range: r,
        reverse: t,
        sort: c,
        toArray: i
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    console.log(s.reverse(s.range(1, 10))), console.log(t(r(1, 10))), console.log(new u)
})();