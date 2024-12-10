var t = function(a, b, e, f) {
    var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
    if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
            if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;
            n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = V.needsContext.test(a) ? 0 : j.length;
        while (i--) {
            if (k = j[i], d.relative[l = k.type]) break;
            if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;
                break
            }
        }
    }
    return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e
}