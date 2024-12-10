function P(e, t, n) {
    var r;
    if (n === undefined && 1 === e.nodeType)
        if (
            ((r = "data-" + t.replace(O, "-$1").toLowerCase()),
                (n = e.getAttribute(r)),
                "string" == typeof n)
        ) {
            try {
                n =
                    "true" === n ?
                    !0 :
                    "false" === n ?
                    !1 :
                    "null" === n ?
                    null :
                    +n + "" === n ?
                    +n :
                    H.test(n) ?
                    JSON.parse(n) :
                    n;
            } catch (i) {}
            L.set(e, t, n);
        } else n = undefined;
    return n;
}