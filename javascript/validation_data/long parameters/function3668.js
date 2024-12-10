var t = function(f, g, h, i, k) {
    var l, o, q, r = 0,
        s = "0",
        t = f && [],
        u = [],
        v = j,
        x = f || e && d.find.TAG("*", k),
        y = w += null == v ? 1 : Math.random() || .1,
        z = x.length;
    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
        if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
            while (q = a[o++])
                if (q(l, g || n, h)) {
                    i.push(l);
                    break
                } k && (w = y)
        }
        c && ((l = !q && l) && r--, f && t.push(l))
    }
    if (r += s, c && s !== r) {
        o = 0;
        while (q = b[o++]) q(t, u, g, h);
        if (f) {
            if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = E.call(i));
            u = wa(u)
        }
        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
    }
    return k && (w = y, j = v), t
}