var t = function(a, b, c, d, e) {
    var f = "nth" !== a.slice(0, 3),
        g = "last" !== a.slice(-4),
        h = "of-type" === b;
    return 1 === d && 0 === e ? function(a) {
        return !!a.parentNode
    } : function(b, c, i) {
        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
            q = b.parentNode,
            r = h && b.nodeName.toLowerCase(),
            s = !i && !h,
            t = !1;
        if (q) {
            if (f) {
                while (p) {
                    m = b;
                    while (m = m[p])
                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                    o = p = "only" === a && !o && "nextSibling"
                }
                return !0
            }
            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                    if (1 === m.nodeType && ++t && m === b) {
                        k[a] = [w, n, t];
                        break
                    }
            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
            return t -= e, t === d || t % d === 0 && t / d >= 0
        }
    }
}