function q(v) {
    var s;
    try {
        s = new XMLHttpRequest();
    } catch (u) {
        for (var t = Ext.isIE6 ? 1 : 0; t < g.length; ++t) {
            try {
                s = new ActiveXObject(g[t]);
                break;
            } catch (u) {}
        }
    } finally {
        return {
            conn: s,
            tId: v
        };
    }
}