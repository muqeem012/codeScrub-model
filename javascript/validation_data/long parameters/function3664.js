var t = function(f, g, h, i) {
    var j, k, l, m = [],
        n = [],
        o = g.length,
        p = f || va(b || "*", h.nodeType ? [h] : h, []),
        q = !a || !f && b ? p : wa(p, m, a, h, i),
        r = c ? e || (f ? a : o || d) ? [] : g : q;
    if (c && c(q, r, h, i), d) {
        j = wa(r, n), d(j, [], h, i), k = j.length;
        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
    }
    if (f) {
        if (e || a) {
            if (e) {
                j = [], k = r.length;
                while (k--)(l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
        }
    } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
}