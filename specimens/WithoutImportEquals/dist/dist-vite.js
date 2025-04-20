(function() {
    "use strict";
    const s = globalThis.Map;

    function t(e, o) {
        const r = [];
        for (let n = e; n < e + o; n++) r.push(n);
        return r
    }

    function l(e) {
        return [...e].reverse()
    }
    console.log(l(t(1, 10))), console.log(new s)
})();