function createResponseObject(o, callbackArg) {
    var headerObj = {},
        headerStr,
        conn = o.conn,
        t,
        s,
        isBrokenStatus = conn.status == 1223;
    try {
        headerStr = o.conn.getAllResponseHeaders();
        Ext.each(headerStr.replace(/\r\n/g, "\n").split("\n"), function(v) {
            t = v.indexOf(":");
            if (t >= 0) {
                s = v.substr(0, t).toLowerCase();
                if (v.charAt(t + 1) == " ") {
                    ++t;
                }
                headerObj[s] = v.substr(t + 1);
            }
        });
    } catch (e) {}
    return {
        tId: o.tId,
        status: isBrokenStatus ? 204 : conn.status,
        statusText: isBrokenStatus ? "No Content" : conn.statusText,
        getResponseHeader: function(header) {
            return headerObj[header.toLowerCase()];
        },
        getAllResponseHeaders: function() {
            return headerStr;
        },
        responseText: conn.responseText,
        responseXML: conn.responseXML,
        argument: callbackArg,
    };
}