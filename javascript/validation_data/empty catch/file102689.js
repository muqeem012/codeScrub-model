function p(u, y) {
    var C = {},
        x,
        w = u.conn,
        A,
        B,
        v = w.status == 1223;
    try {
        x = u.conn.getAllResponseHeaders();
        Ext.each(x.replace(/\r\n/g, "\n").split("\n"), function(s) {
            A = s.indexOf(":");
            if (A >= 0) {
                B = s.substr(0, A).toLowerCase();
                if (s.charAt(A + 1) == " ") {
                    ++A;
                }
                C[B] = s.substr(A + 1);
            }
        });
    } catch (z) {}
    return {
        tId: u.tId,
        status: v ? 204 : w.status,
        statusText: v ? "No Content" : w.statusText,
        getResponseHeader: function(s) {
            return C[s.toLowerCase()];
        },
        getAllResponseHeaders: function() {
            return x;
        },
        responseText: w.responseText,
        responseXML: w.responseXML,
        argument: y,
    };
}