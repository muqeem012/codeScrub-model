function s() {
    var x = this,
        w = {
            responseText: "",
            responseXML: null,
            argument: q.argument
        },
        A,
        z;
    try {
        A = r.contentWindow.document || r.contentDocument || g.frames[l].document;
        if (A) {
            if (A.body) {
                if (/textarea/i.test((z = A.body.firstChild || {}).tagName)) {
                    w.responseText = z.value;
                } else {
                    w.responseText = A.body.innerHTML;
                }
            }
            w.responseXML = A.XMLDocument || A;
        }
    } catch (y) {}
    Ext.EventManager.removeListener(r, c, s, x);
    x.fireEvent(e, x, w, q);

    function o(D, C, B) {
        if (Ext.isFunction(D)) {
            D.apply(C, B);
        }
    }
    o(q.success, q.scope, [w, q]);
    o(q.callback, q.scope, [q, true, w]);
    if (!x.debugUploads) {
        setTimeout(function() {
            Ext.removeNode(r);
        }, 100);
    }
}