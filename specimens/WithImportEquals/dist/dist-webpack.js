(() => {
    "use strict";
    var e = {
            d: (r, o) => {
                for (var t in o) e.o(o, t) && !e.o(r, t) && Object.defineProperty(r, t, {
                    enumerable: !0,
                    get: o[t]
                })
            },
            o: (e, r) => Object.prototype.hasOwnProperty.call(e, r),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        r = {};

    function o(e, r) {
        const o = [];
        for (let t = e; t < e + r; t++) o.push(t);
        return o
    }

    function t(e) {
        return [...e].sort()
    }

    function n(e) {
        return [...e].reverse()
    }

    function l(e) {
        return [...e]
    }
    e.r(r), e.d(r, {
        range: () => o,
        reverse: () => n,
        sort: () => t,
        toArray: () => l
    });
    const s = globalThis.Map;
    var u = r;
    console.log(u.reverse(u.range(1, 10))), console.log(n(o(1, 10))), console.log(new s)
})();